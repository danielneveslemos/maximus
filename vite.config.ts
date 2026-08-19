import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5184,
    host: true,
    strictPort: true,
    watch: {
      // HMR only needs src + index; ignore build artifacts and deps.
      ignored: ["**/node_modules/**", "**/dist/**", "**/.git/**"],
    },
  },
});
