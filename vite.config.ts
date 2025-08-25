import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import path from "node:path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    visualizer({ open: true, template: "treemap" }),
    svgr({
      svgrOptions: {
        exportType: "named",
        svgo: true,
        svgoConfig: {
          plugins: [
            { name: "removeDimensions", active: true },
            { name: "removeViewBox", active: false },
          ],
        },
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    target: "es2018",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("@mantine")) return "mantine";
            if (id.includes("embla-carousel")) return "carousel";
            if (id.includes("i18next")) return "i18n";
            if (id.includes("@fortawesome")) return "fontawesome";
            return "vendor";
          }
          if (id.includes("/src/pages/home/")) return "page-home";
          if (id.includes("/src/pages/phone/")) return "page-phone";
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-helmet-async"],
  },
});
