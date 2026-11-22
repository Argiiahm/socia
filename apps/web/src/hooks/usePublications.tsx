"use client";

import { getPublications } from "@/services/publication.service";
import { PublicationTypes } from "@/types/PublicationTypes";
import { useEffect, useState } from "react";

const usePublications = () => {
  const [publications, setPublications] = useState<PublicationTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPublications = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getPublications();
      setPublications(response.data);
    } catch (error) {
       setError(error instanceof Error ? error.message : 'Faild to fetch Publications')
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return { fetchPublications, publications, isLoading, error };
};

export default usePublications;
