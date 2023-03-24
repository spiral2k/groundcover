import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import css from "./Layout.module.scss";

function Layout() {
  return (
    <div className={css.layout_container}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
