// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, "src/main.ts")],
      name: "@uploadcare/react-adapter",

      formats: ["es", "cjs"],

      fileName: (format, entryName) =>
        `react-adapter.${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
