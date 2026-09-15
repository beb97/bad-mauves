// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actu = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/actu' }),
    schema: z.object({
        title: z.string(),
        description: z.string().max(160),
        date: z.coerce.date(),
        author: z.string().default('Admin'),
        tags: z.array(z.string()).default([]),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        draft: z.boolean().default(false),
    }),
});

export const collections = { actu };