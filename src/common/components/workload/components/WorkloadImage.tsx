import Img from "src/common/components/Img";
import { Workload } from "src/types";

import hasIssuesIcon from "src/assets/has-issues.png";
import noIssuesIcon from "src/assets/no-issues.png";

export default function WorkloadImage({
  issuesCount,
}: Pick<Workload, "issuesCount">) {
  const getIcon = () => {
    if (issuesCount) {
      return hasIssuesIcon;
    }

    return noIssuesIcon;
  };

  return <Img src={getIcon()} alt="" />;
}
