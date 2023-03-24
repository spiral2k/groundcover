import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupWorker } from "msw";
import handlers from "./mocks/handlers";

const worker = setupWorker(...handlers);

worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
