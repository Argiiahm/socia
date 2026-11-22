"use client";

import { getPublicationsByUsername } from "@/services/publication.service";
import { PublicationTypes } from "@/types/PublicationTypes";
import { useEffect, useState } from "react";

const useCreatorPublications = (username: string) => {
  const [publications, setPublications] = useState<PublicationTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getPublicationsByUsername(username);
      setPublications(response.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to Fetch')
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, publications, isLoading, error };
};

export default useCreatorPublications;
