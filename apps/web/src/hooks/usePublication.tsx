"use client";

import { getPublication } from "@/services/publication.service";
import { PublicationTypes } from "@/types/PublicationTypes";
import { useEffect, useState } from "react";

const usePublication = (id: string) => {
  const [publication, setPublication] = useState<PublicationTypes | null>(null);

  const fetchData = async () => {
    try {
      const response = await getPublication(id);
      setPublication(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return { fetchData, publication };
};

export default usePublication;
