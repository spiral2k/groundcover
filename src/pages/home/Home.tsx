import { useWorkloadsStore, selectors } from "src/state/workloads";
import Page from "src/common/components/page";
import Workloads from "src/common/components/workloads";
import useWorkloadDrawer from "src/pages/home/hooks/useWorkloadDrawer";
import WorkloadDrawer from "./components/WorkloadDrawer";
import { useEffect } from "react";
import useAxios from "src/common/hooks/useAxios";
import { Workload } from "src/types";
import { seriesSortHendler } from "src/utils";
import Loader from "src/common/components/loader";

export default function Home() {
  const [drawerState, drawerActions] = useWorkloadDrawer();
  const workloads = useWorkloadsStore(selectors.getWorkloads);
  const setWorkloads = useWorkloadsStore(selectors.setWorkloads);
  const [getWorkloads, { loading }] = useAxios({ url: "/get-workloads" });

  const init = async () => {
    const workloads: Workload[] = await getWorkloads();
    setWorkloads(workloads.sort(seriesSortHendler));
  };

  useEffect(() => {
    init();
  }, []);

  if (!workloads.length) {
    return <Loader />;
  }

  return (
    <Page>
      <Workloads
        workloads={workloads}
        onItemClick={drawerActions.onWorkloadClick}
      />
      <WorkloadDrawer drawerState={drawerState} drawerActions={drawerActions} />
    </Page>
  );
}
