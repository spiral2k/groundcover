import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Routes */
import Layout from "src/layout/Layout";
import Home from "src/pages/home";
import NotFound from "src/pages/not-found";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
