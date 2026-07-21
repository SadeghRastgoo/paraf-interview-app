import { apiClient } from "@/lib/api/client";
import {
  userVitrinsSchema,
  UserVitrinsSchema,
} from "../schemas/customers-club.schema";
import type { ApiResponse } from "@/shared/types";

export async function getAllUserVitrin(): Promise<UserVitrinsSchema> {
  const { data } = await apiClient.get<ApiResponse<UserVitrinsSchema>>(
    "users/vitrin/all-user",
  );
  return data.result;
}
