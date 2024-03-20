// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/libs.ts'),
      ],
      name: '@uploadcare/react-uploader',

      formats: ['es', 'cjs'],

      fileName: (format, entryName) =>
        `react-uploader.${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
