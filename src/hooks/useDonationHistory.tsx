import { useState, useEffect, useCallback } from "react";
import API from "@/lib/api/axios";
import { Donation } from "@/types/Donation";

export const useDonationHistory = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDonationHistory = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await API.get("/transactions/history/");
      setDonations(response.data);
    } catch (err) {
      console.error("Failed to fetch donation history:", err);
      setError("Failed to load donation history");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDonationHistory();
  }, [fetchDonationHistory]);

  return {
    donations,
    isLoading,
    error,
    refetch: fetchDonationHistory,
  };
};
