import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://localhost:4321",
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	integrations: [
		tailwind(),
		sitemap(),
		icon({
			include: {
				lucide: ["filter"],
			},
		}),
	],
});
