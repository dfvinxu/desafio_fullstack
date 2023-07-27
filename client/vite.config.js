import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/signup": "http://localhost:3000",
      "/auth/login": "http://localhost:3000",
      "/auth/google": "http://localhost:3000",
      "/auth/google/callback": "http://localhost:3000",
    },
  },
});
