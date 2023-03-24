import Logo from "src/assets/logo.png";

import css from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={css.navbar_container}>
      <div className={css.inner_container}>
        <img src={Logo} />
        <span className={css.logo_text}>OVERVIEW</span>
      </div>
    </div>
  );
}

export default Navbar;
