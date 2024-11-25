import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@configs": "/src/configs",
      "@layouts": "/src/layouts",
      "@utils": "/src/utils",
      "@views": "/src/utils",
    },
  },
});
