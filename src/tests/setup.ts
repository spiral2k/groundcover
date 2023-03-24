import { setupServer } from "msw/node";
import handlers from "src/mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => {
  console.log("Test setup is running...");
  server.listen({ onUnhandledRequest: "error" });
});
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
});
