import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@api",
        replacement: path.resolve(__dirname, "./src/services/api"),
      },
      { find: "@styles", replacement: path.resolve(__dirname, "./src/styles") },
      {
        find: "@patterns",
        replacement: path.resolve(__dirname, "./src/patterns"),
      },
    ],
  },
  // https://vitejs.dev/guide/build.html#customizing-the-build
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "patterns-[name]-[hash].js",
        assetFileNames: "assets/patterns-[name]-[hash].[ext]",
        chunkFileNames: "patterns-[name]-[hash].js",
      },
    },
  },
});
