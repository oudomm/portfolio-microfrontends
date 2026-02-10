import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    tailwindcss(),
    federation({
      name: "blog",
      filename: "remoteEntry.js",
      exposes: {
        "./mount": "./src/mount",
      },
      shared: ["svelte"],
    }),
    svelte(),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3003,
    strictPort: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  preview: { port: 3003, strictPort: true },
});
