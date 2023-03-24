import { ReactNode } from "react";
import css from "./Page.module.scss";

type Props = {
  children: ReactNode;
};

function Page({ children }: Props) {
  return (
    <div className={css.page_container}>
      <div className={css.page_inner}>{children}</div>
    </div>
  );
}

export default Page;
