import { useQuery } from "@tanstack/react-query";
import {
  getOrganizationActivities,
  getOrganizationEvents,
} from "../services/organization-kpi-services";

export const useOrganizationEventsQuery = () => {
  return useQuery<number>({
    queryKey: ["organization-events-kpi"],
    queryFn: getOrganizationEvents,
  });
};

export const useOrganizationActivitiesQuery = () => {
  return useQuery<number>({
    queryKey: ["organization-activities-kpi"],
    queryFn: getOrganizationActivities,
  });
};
