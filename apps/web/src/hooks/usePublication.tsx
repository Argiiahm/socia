"use client";

import { getPublication } from "@/services/publication.service";
import { PublicationTypes } from "@/types/PublicationTypes";
import { useEffect, useState } from "react";

const usePublication = (id: string) => {
  const [publication, setPublication] = useState<PublicationTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getPublication(id);
      setPublication(response.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch publication')
    } finally {
      setIsLoading(false)
    }
  };
    fetchData();
  }, [id]);

  return { publication, isLoading, error };
};

export default usePublication;
