import { apiClient } from "@/lib/api/client";
import type {
  ApiResponse,
  LoginCredentials,
  LoginResponse,
  UserProfile,
} from "../auth.types";
import { userProfileSchema } from "../schemas/user.schema";

export async function login(
  credentials: LoginCredentials,
): Promise<LoginResponse> {
  const { data } = await apiClient.post<ApiResponse<LoginResponse>>(
    "users/login",
    credentials,
  );
  return data.result;
}

export async function getCurrentUser(): Promise<UserProfile> {
  const { data } = await apiClient.get<ApiResponse<UserProfile>>("users/me");
  return userProfileSchema.parse(data.result);
}
