import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const base = env.VITE_PROJECTS_URL || "http://localhost:3002";

  return {
    base,
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
  };
});
