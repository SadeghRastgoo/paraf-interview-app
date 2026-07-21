import { z } from "zod/v4";

export const userProfileSchema = z.object({
  level: z.number(),
  coins: z.number(),
  scores: z.number(),
});

export type UserProfileSchema = z.infer<typeof userProfileSchema>;
