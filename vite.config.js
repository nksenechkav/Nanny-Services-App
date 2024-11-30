import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 build: {
  sourcemap: true,
 },
 base: "/",
 define: {
    'process.env': process.env,  // если вам нужно передавать переменные окружения в приложение
  },
});
