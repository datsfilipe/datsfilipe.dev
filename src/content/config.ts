import { defineCollection, reference, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedAt: z
      .string()
      .optional()
      .transform((str) => ((str !== undefined && str !== '') ? new Date(str) : undefined)),
    heroImage: z.string().optional()
  })
})

export const notesSchema = z.object({
  title: z.string(),
  relatedPosts: z.array(reference('blog')).optional(),
  relatedNotes: z.array(reference('notes')).optional()
})

const brain = defineCollection({
  schema: notesSchema
})

export const collections = { blog, brain }