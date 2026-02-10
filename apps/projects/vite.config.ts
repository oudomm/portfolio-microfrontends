import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    tailwindcss(),
    federation({
      name: "projects",
      filename: "remoteEntry.js",
      exposes: {
        "./mount": "./src/mount",
      },
      shared: ["vue"],
    }),
    vue(),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3002,
    strictPort: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  preview: { port: 3002, strictPort: true },
});
