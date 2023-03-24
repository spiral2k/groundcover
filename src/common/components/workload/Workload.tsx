import { Workload as WorkloadType } from "src/types";
import Protocols from "./components/Protocols";
import WorkloadImage from "./components/WorkloadImage";

import css from "./Workload.module.scss";

type Props = {
  item: WorkloadType;
  onClick: (item: WorkloadType) => void;
};

function Workload({ item, onClick }: Props) {
  const { issuesCount, workload, namespace, protocols, entityId } = item;

  return (
    <div
      className={`${css.workload_container} ${
        issuesCount > 0 ? css.has_issues : ""
      } `}
      onClick={() => onClick(item)}
      data-testid={entityId}
    >
      <div className={css.issue_overview_container}>
        <WorkloadImage issuesCount={issuesCount} />
        <div className={css.count}>{issuesCount}</div>
        <div className={css.count_label}>Issues</div>
      </div>

      <div className={css.detailes_container}>
        <div>
          <div className={css.workload_name}>{workload}</div>
          <div className={css.workload_namespace}>{namespace}</div>
        </div>

        <Protocols protocols={protocols} issuesCount={issuesCount} />
      </div>
    </div>
  );
}

export default Workload;
