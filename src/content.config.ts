import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    meta_image: z.string().optional(),
    hero_title: z.string().optional(),
    hero_content: z.string().optional(),
    hero_cta: z.object({
      url: z.string(),
      label: z.string(),
    }).optional(),
  }),
});

export const collections = { pages: pagesCollection };
