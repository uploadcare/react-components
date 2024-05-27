// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        resolve(__dirname, "src/libs.ts"),
      ],
      name: "@uploadcare/react-uploader",

      formats: ["es", "cjs"],

      fileName: "react-uploader",
    },
    rollupOptions: {
      external: ["react", "@uploadcare/blocks"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    dts({ rollupTypes: true, insertTypesEntry: true }),
  ],
});
