import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

export default () => {
  const baseURL = process.env.APP_ENV === "development" ? "/" : "/frontend/";

  return defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
    plugins: [vue(), vuetify({ autoImport: true })],

    server: {
      host: "localhost",
      port: 8081,
    },
    base: baseURL,
  });
};
