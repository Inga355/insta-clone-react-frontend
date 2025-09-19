import { z } from "zod";

const highlightSchema = z.object({
  id: z.number(),
  cover_img_url: z.string().url(),
  title: z.string().optional(),
  created_at: z.string().optional(),
});

const highlightsSchema = z.array(highlightSchema);

type Highlight = z.infer<typeof highlightSchema>;

export { highlightSchema, highlightsSchema };
export type { Highlight };