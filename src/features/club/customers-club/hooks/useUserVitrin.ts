import { useQuery } from "@tanstack/react-query";
import { getUserVitrinById } from "../services/customers-club.service";

export function useUserVitrin(userId?: string | number) {
  return useQuery({
    queryKey: ["user-vitrin", userId],
    queryFn: () => getUserVitrinById(userId!),
    enabled: !!userId,
  });
}
