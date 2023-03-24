import { rest } from "msw";

/* mocks */
import workloadList from "./workload-list.json";
import velocity from "./velocity.json";

export default [
  rest.get("/get-workloads", (req, res, ctx) => {
    return res(ctx.json(workloadList));
  }),
  rest.get("/get-velocity", (req, res, ctx) => {
    return res(ctx.json(velocity));
  }),
];
