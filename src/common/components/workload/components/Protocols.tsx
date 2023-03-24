import { Workload } from "src/types";

import css from "./Protocol.module.scss";

type ProtocolProps = { label: string };

const Protocol = ({ label }: ProtocolProps) => <li>{label}</li>;

function Protocols({ protocols }: Pick<Workload, "protocols">) {
  return (
    <ul className={css.protocol_list}>
      {protocols.map((protocol) => (
        <Protocol key={protocol} label={protocol} />
      ))}
    </ul>
  );
}

export default Protocols;
