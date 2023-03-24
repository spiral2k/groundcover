import { ReactNode } from "react";

import css from "./Drawer.module.scss";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

function Drawer({ isOpen, children }: Props) {
  return (
    <div className={`${css.drawer_container} ${isOpen ? css.is_open : ""}`}>
      <div className={css.content}>{children}</div>
    </div>
  );
}

export default Drawer;
