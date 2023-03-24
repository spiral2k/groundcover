import Img from "src/common/components/Img";
import arrowLeftIcon from "src/assets/arrow_left.png";
import arrowRightIcon from "src/assets/arrow_right.png";
import css from "../Drawer.module.scss";
import { selectors, useWorkloadsStore } from "src/state/workloads";
import { useMemo } from "react";
import useSelectedWorkloadId from "src/common/hooks/useSelectedWorkloadId";
import { findWorkloadHandler } from "src/utils";

const DrawerNavigation = () => {
  const [selectedWorkloadId, paramsActions] = useSelectedWorkloadId();
  const workloads = useWorkloadsStore(selectors.getWorkloads);
  const currentSelectedIndex = useMemo(
    () =>
      workloads.findIndex((workload) =>
        findWorkloadHandler(workload, selectedWorkloadId)
      ) + 1,
    [selectedWorkloadId, workloads]
  );

  const handleNext = () => {
    const nextElement = workloads[currentSelectedIndex];

    if (!nextElement) {
      return paramsActions.set(workloads[0].entityId);
    }

    paramsActions.set(nextElement.entityId);
  };

  const handlePrev = () => {
    const prev = workloads[currentSelectedIndex - 2];

    if (!prev) {
      const lastElement = workloads.length - 1;
      return paramsActions.set(workloads[lastElement].entityId);
    }

    paramsActions.set(prev.entityId);
  };

  return (
    <div className={css.drawer_navigation_container}>
      <Img src={arrowLeftIcon} onClick={handlePrev} testId="drawer-navigation-btn-prev" />
      <span className={css.navigation_index}>
        <span data-testid="drawer-navigation-current-index">
          {currentSelectedIndex}
        </span>
        <span className={css.separator}>/</span> {workloads.length}
      </span>
      <Img src={arrowRightIcon} onClick={handleNext} testId="drawer-navigation-btn-next" />
    </div>
  );
};

export default DrawerNavigation;
