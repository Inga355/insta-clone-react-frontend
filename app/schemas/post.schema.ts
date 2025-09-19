import { z } from "zod";

// First, we declare a zod schema
const postSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

const postsSchema = z.array(postSchema);
type Post = z.infer<typeof postSchema>;

// Schema for creating a new post (for frontend validation)
const createPostInputSchema = z
  .object({
    caption: z.string().min(1, "Caption is required.").max(255).optional(),
    image: z.instanceof(File).optional(), // For file input
  })
  .refine((data) => data.caption || data.image, {
    message: "Either an image or a caption is required.",
    path: ["image"], // Attach error to image field if both are missing
  });

type CreatePostInput = z.infer<typeof createPostInputSchema>;

export { postSchema, postsSchema, createPostInputSchema };
export type { Post, CreatePostInput };