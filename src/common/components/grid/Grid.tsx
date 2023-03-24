import { ReactNode } from "react";

import css from "./Grid.module.scss";

type Props = {
  children: ReactNode;
};

function Grid({ children }: Props) {
  return <div className={css.grid_container}>{children}</div>;
}

export default Grid;
