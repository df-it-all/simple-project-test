import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: ["5b5c2155-13f8-4b47-885b-5ec8437af620-00-7215yquvdkj6.sisko.replit.dev"],
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
  },
});
