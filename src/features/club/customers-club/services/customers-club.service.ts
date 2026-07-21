import { apiClient } from "@/lib/api/client";
import {
  UserVitrinSchema,
  userVitrinSchema,
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

export async function getUserVitrinById(
  userVitrinId: string | number,
): Promise<UserVitrinSchema> {
  const { data } = await apiClient.get<ApiResponse<UserVitrinSchema>>(
    `users/vitrin/${userVitrinId}`,
  );
  return data.result;
}
