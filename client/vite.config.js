import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/signup": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/auth/login": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/auth/google": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/auth/google/callback": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/api": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/api/fuentes": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/api/museos": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/api/parks": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
      "/api/oficinas-turismo": "https://dcwqpn8sih.eu-west-1.awsapprunner.com/",
    },
  },
});
