import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ai26.net",
  vite: { plugins: [tailwindcss()] },
});
