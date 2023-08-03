import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  server: {
    proxy: {
      "/auth/signup": "http://localhost:3000",
      "/auth/logout": "http://localhost:3000",
      "/auth/login": "http://localhost:3000",
      "/auth/google": "http://localhost:3000",
      "/auth/google/callback": "http://localhost:3000",
      "/api": "http://localhost:3000",
      "/api/fuentes": "http://localhost:3000",
      "/api/museos": "http://localhost:3000",
      "/api/parks": "http://localhost:3000",
      "/api/oficinas-turismo": "http://localhost:3000",
      "/api/favorites": "http://localhost:3000",
      "/api/favorites/eventos": "http://localhost:3000",
      "/api/favorites/eventos/userId?": "http://localhost:3000",
    },
  },
});
