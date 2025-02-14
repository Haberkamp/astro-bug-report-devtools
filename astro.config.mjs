// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

import expressiveCode from "astro-expressive-code";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [icon(), expressiveCode(), react()],

  adapter: vercel(),
});
