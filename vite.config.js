import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   loader: "jsx", // treats all .js as JSX
  //   include: /src\/.*\.js$/,
  // },
});
