import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    tailwindcss(),
    federation({
      name: "shell",
      remotes: {
        home: "http://localhost:3001/assets/remoteEntry.js",
        projects: "http://localhost:3002/assets/remoteEntry.js",
        blog: "http://localhost:3003/assets/remoteEntry.js",
      },

      shared: ["react", "react-dom"],
    }),
    react(),
  ],
  build: {
    target: "esnext",
  },
  server: { port: 3000, strictPort: true },
  preview: { port: 5000, strictPort: true },
});
