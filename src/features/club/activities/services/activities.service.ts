import { apiClient } from "@/lib/api/client";
import type { ApiResponse } from "@/shared/types";
import {
  RecentActivitiesSchema,
  RecentActivitiesTypeEnum,
} from "../schemas/acitivites.schema";

interface GetRecentActivitiesParams {
  offset?: number;
  size?: number;
  type?: RecentActivitiesTypeEnum;
}

export async function getRecentActivities({
  offset = 0,
  size = 10,
  type,
}: GetRecentActivitiesParams = {}): Promise<RecentActivitiesSchema> {
  const { data } = await apiClient.get<ApiResponse<RecentActivitiesSchema>>(
    "recent-activities",
    {
      params: {
        offset,
        size,
        type,
      },
    },
  );

  return data.result;
}
