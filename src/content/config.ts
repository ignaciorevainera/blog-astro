import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		image: z.string().url(),
		title: z.string(),
		author: z.string(),
		date: z.coerce.date(),
		tags: z.string().array(),
	}),
});

export const collections = { blog };
