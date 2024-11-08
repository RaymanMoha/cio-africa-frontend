import { defineconfig } from "Vite";
import react from "@vite-tsconfig-paths";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [tsconfigPaths(), react()],
});
