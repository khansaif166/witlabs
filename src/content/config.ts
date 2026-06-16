import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('WitLabs Team'),
    category: z.enum([
      'SEO', 'Digital Marketing', 'Web Design',
      'Business Growth', 'Automation', 'Case Study',
    ]),
    readTime: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seoTitle: z.string().max(60).optional(),
    seoDescription: z.string().max(160).optional(),
    seo_title: z.string().max(60).optional(),
    seo_description: z.string().max(160).optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
    ogImageWidth: z.number().optional(),
    ogImageHeight: z.number().optional(),
  }),
});

export const collections = { insights };
