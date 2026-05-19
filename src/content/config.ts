import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    client: z.string(),
    industry: z.string(),
    industrySlug: z.string(),
    location: z.string(),
    services: z.array(z.string()),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    challenge: z.string(),
    approach: z.string(),
    results: z.array(z.object({
      metric: z.string(),
      value: z.string(),
      description: z.string(),
      positive: z.boolean().default(true),
    })),
    testimonial: z.object({
      quote: z.string(),
      name: z.string(),
      role: z.string(),
      avatar: z.string().optional(),
    }).optional(),
    seoTitle: z.string().max(60),
    seoDescription: z.string().max(160),
    keywords: z.array(z.string()).optional(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Saif Ali Khan'),
    category: z.enum([
      'SEO', 'Digital Marketing', 'Web Design',
      'Business Growth', 'Automation', 'Case Study',
    ]),
    readTime: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seoTitle: z.string().max(60).optional(),
    seoDescription: z.string().max(160).optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies, insights };
