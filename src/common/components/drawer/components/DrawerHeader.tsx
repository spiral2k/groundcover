import { ReactNode } from "react";

import css from "../Drawer.module.scss";

type Props = {
  children: ReactNode;
};

function DrawerHeader({ children }: Props) {
  return <div className={css.header}>{children}</div>;
}

export default DrawerHeader;
