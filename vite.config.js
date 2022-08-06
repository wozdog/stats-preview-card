import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // dev specific config
      base: "/",
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      base: "/stats-preview-card/",
    };
  }
});
