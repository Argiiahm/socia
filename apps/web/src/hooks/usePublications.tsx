"use client";

import { getPublications } from "@/services/publication.service";
import { PublicationTypes } from "@/types/PublicationTypes";
import { useEffect, useState } from "react";

const usePublications = () => {
  const [publications, setPublications] = useState<PublicationTypes[]>([]);

  const fetchPublications = async () => {
    const response = await getPublications();
    setPublications(response.data);
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return { fetchPublications, publications };
};

export default usePublications;
