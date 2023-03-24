import Drawer from "src/common/components/drawer";
import Chart from "src/common/components/chart";
import DrawerHeader from "src/common/components/drawer/components/DrawerHeader";
import DrawerNavigation from "src/common/components/drawer/components/DrawerNavigation";
import { DrawerState, DrawerActions } from "../hooks/useWorkloadDrawer";
import Img from "src/common/components/Img";
import CloseIcon from "src/assets/x.png";
import Loader from "src/common/components/loader";

function WorkloadDrawer({
  drawerState,
  drawerActions,
}: {
  drawerState: DrawerState;
  drawerActions: DrawerActions;
}) {
  const content = drawerState.loading ? (
    <Loader />
  ) : (
    drawerState.velocitySeries?.map(({ name, series, options }) => (
      <Chart key={name} title={name} series={series} options={options} />
    ))
  );

  return (
    <Drawer isOpen={drawerState.isDrawerOpen}>
      <DrawerHeader>
        <Img src={CloseIcon} onClick={drawerActions.onDrawerClose} />
        <DrawerNavigation />
      </DrawerHeader>
      {content}
    </Drawer>
  );
}

export default WorkloadDrawer;
