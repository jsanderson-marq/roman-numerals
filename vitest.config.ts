import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
    include: [
      "src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "src/**/*.{test,spec}.{js,jsx,ts,tsx}",
    ],
    exclude: [".next", "node_modules"],
    coverage: {
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "src/**/*.d.ts",
        "src/app/layout.tsx",
        "src/app/loading.tsx",
        "src/app/error.tsx",
        "src/app/not-found.tsx",
      ],
    },
    reporters: ["default"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "~src": resolve(__dirname, "./src/index.ts"),
    },
  },
});
