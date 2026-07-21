import z from "zod/v4";
import { userProfileSchema } from "./schemas/user.schema";

export interface LoginCredentials {
  phone: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export type UserProfile = z.infer<typeof userProfileSchema>;

