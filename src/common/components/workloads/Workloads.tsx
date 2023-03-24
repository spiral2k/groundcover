import Workload from "src/common/components/workload";
import Grid from "src/common/components/grid";
import { Workload as WorkloadType, WorkloadsStore } from "src/types";

type Props = {
  onItemClick: (item: WorkloadType) => void;
} & Pick<WorkloadsStore, "workloads">;

function Workloads({ workloads, onItemClick }: Props) {
  return (
    <Grid>
      {workloads.map((workload) => (
        <Workload
          key={workload.entityId}
          item={workload}
          onClick={onItemClick}
        />
      ))}
    </Grid>
  );
}

export default Workloads;
