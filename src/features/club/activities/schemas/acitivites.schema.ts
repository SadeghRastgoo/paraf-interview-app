import { z } from "zod";

export const recentActivitiesTypeEnum = z.enum([
  "BOTH",
  "COIN",
  "SCORE",
  "SPENTCOIN",
  "TRANSFERCOIN",
]);

export const recentActivitySchema = z.object({
  type: recentActivitiesTypeEnum,
  taskTitle: z.string(),
  taskDescription: z.string(),
  scoreAmount: z.number(),
  coinAmount: z.number(),
  createdAt: z.string(),
});

export const recentActivitiesSchema = z.array(recentActivitySchema);

export type RecentActivitySchema = z.infer<typeof recentActivitySchema>;
export type RecentActivitiesSchema = z.infer<typeof recentActivitiesSchema>;
export type RecentActivitiesTypeEnum = z.infer<typeof recentActivitiesTypeEnum>;
