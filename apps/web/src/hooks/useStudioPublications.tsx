"use client";

import { getPublicationsByUsername } from "@/services/publication.service";
import { PublicationTypes } from "@/types/PublicationTypes";
import { useAuthStore } from "@/stores/auth.store";
import { useEffect, useState } from "react";

const useStudioPublications = () => {
  const { user } = useAuthStore();
  const [publications, setPublications] = useState<PublicationTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPublications = async () => {
    if (!user?.username) return;
    try {
      setIsLoading(true);
      setError(null);
      const response = await getPublicationsByUsername(user.username);
      setPublications(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch publications");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, [user?.username]);

  return { publications, isLoading, error, refetch: fetchPublications };
};

export default useStudioPublications;
