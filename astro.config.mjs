// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cute-mermaid-7a26f0.netlify.app/",
  integrations: [preact()]
});