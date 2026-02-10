import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const homeBase = env.VITE_HOME_URL || "http://localhost:3001";
  const projectsBase = env.VITE_PROJECTS_URL || "http://localhost:3002";
  const blogBase = env.VITE_BLOG_URL || "http://localhost:3003";

  return {
    plugins: [
      tailwindcss(),
      federation({
        name: "shell",
        remotes: {
          home: `${homeBase}/assets/remoteEntry.js`,
          projects: `${projectsBase}/assets/remoteEntry.js`,
          blog: `${blogBase}/assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom"],
      }),
      react(),
    ],
    build: { target: "esnext" },
    server: { port: 3000, strictPort: true },
    preview: { port: 5000, strictPort: true },
  };
});
