import { useQuery } from "@tanstack/react-query";
import { getRecentActivities } from "../services/activities.service";

export function useRecentActivities() {
  return useQuery({
    queryKey: ["recent-activities"],
    queryFn: () =>
      getRecentActivities({
        offset: 0,
        size: 10,
      }),
  });
}
