import { Workload } from "src/types";

import css from "./Protocol.module.scss";

type ProtocolProps = { label: string };

const Protocol = ({ label }: ProtocolProps) => <li>{label}</li>;

function Protocols({
  protocols,
  issuesCount,
}: Pick<Workload, "protocols" | "issuesCount">) {
  const classVariant = issuesCount > 0 ? css.hasIssues : "";

  return (
    <ul className={`${css.protocol_list} ${classVariant}`}>
      {protocols.map((protocol) => (
        <Protocol key={protocol} label={protocol} />
      ))}
    </ul>
  );
}

export default Protocols;
