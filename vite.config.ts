// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     }, 
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for src folder
    },
  },
  build: {
    outDir: "dist", // Specify the output directory for the build
  },
  server: {
    host: '0.0.0.0',  // Allows access from any device on the network
    port: 3000,  // Optional: set a specific port
  },
});
