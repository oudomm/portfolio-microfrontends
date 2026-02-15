import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const base = env.VITE_HOME_URL || "http://localhost:3001";

  return {
    base,
    plugins: [
      tailwindcss(),
      federation({
        name: "home",
        filename: "remoteEntry.js",
        exposes: {
          "./mount": "./src/mount",
        },
        shared: ["react", "react-dom"],
      }),
      react(),
    ],
    build: {
      target: "esnext",
    },
    server: {
      port: 3001,
      strictPort: true,
      headers: { "Access-Control-Allow-Origin": "*" },
    },
    preview: { port: 3001, strictPort: true },
  };
});
