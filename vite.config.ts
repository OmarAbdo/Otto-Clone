import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), ViteTsconfigPaths()],
});
