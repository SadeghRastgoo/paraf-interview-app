import { useQuery } from "@tanstack/react-query";
import { getAllUserVitrin } from "../services/customers-club.service";

export function useUserVitrins() {
  return useQuery({
    queryKey: ["user-vitrins"],
    queryFn: getAllUserVitrin,
  });
}
