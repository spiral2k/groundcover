import routes from "./Routes";

import "src/style/reset.scss";
import "src/style/global.scss";
import css from "./App.module.scss";

function App() {
  return <div className={css.app_container}>{routes}</div>;
}

export default App;
