import { useEffect, useState } from "react";
import useAxios from "src/common/hooks/useAxios";
import useSelectedWorkloadId from "src/common/hooks/useSelectedWorkloadId";
import { ChartSeries, Workload } from "src/types";
import { transformToSeries } from "src/utils";

export type DrawerState = {
  loading: boolean;
  isDrawerOpen: boolean;
  velocitySeries: ChartSeries[];
};

export type DrawerActions = {
  setIsOpen: (isOpen: boolean) => void;
  onWorkloadClick: (workload: Workload) => void;
  onDrawerClose: () => void;
};

type ReturnType = [DrawerState, DrawerActions];

function useWorkloadDrawer(): ReturnType {
  const [selectedWorkloadId, paramsActions] = useSelectedWorkloadId();
  const [isDrawerOpen, setIsOpen] = useState<boolean>(false);
  const [getWorkloadVelocity, { loading }] = useAxios({ url: "/get-velocity" });
  const [velocitySeries, setVelovitySeries] = useState<ChartSeries[]>([]);

  const normalizeSeries = (velocityResponse: any): ChartSeries[] => {
    const keys = Object.keys(velocityResponse);

    const series = keys.map((key) =>
      transformToSeries(key, velocityResponse[key])
    );

    return series;
  };

  const handleFetch = async (workloadId?: string) => {
    const velocityResponse = await getWorkloadVelocity({ workloadId });
    const normalizedSeries = normalizeSeries(velocityResponse);

    setVelovitySeries(normalizedSeries);
  };

  useEffect(() => {
    if (!selectedWorkloadId) return;
    setIsOpen(true);
    handleFetch(selectedWorkloadId);
  }, [selectedWorkloadId]);

  const onDrawerClose = () => {
    paramsActions.clear();
    setVelovitySeries([]);
    setIsOpen(false);
  };

  const onWorkloadClick = (workload: Workload) => {
    paramsActions.set(workload.entityId);
    setIsOpen(true);
  };

  const actions = {
    setIsOpen,
    onWorkloadClick,
    onDrawerClose,
  };

  const state = {
    loading,
    isDrawerOpen,
    velocitySeries,
  };

  return [state, actions];
}

export default useWorkloadDrawer;
