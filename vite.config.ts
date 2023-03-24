import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    include: ["**/*.{test,unit}.{mjs,cjs,ts,mts,cts,jsx,tsx}"],
    threads: true,
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      "src/": "/src/",
    },
  },
} as any);
