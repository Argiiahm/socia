"use client";

import { getPublicationsByUsername } from "@/services/publication.service";
import { useEffect, useState } from "react";

export type CreatorPublication = {
  id: string;
  image: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    fullname: string;
    username: string;
  };
};

const useCreatorPublications = (username: string) => {
  const [publications, setPublications] = useState<CreatorPublication[]>([]);

  const fetchData = async () => {
    const response = await getPublicationsByUsername(username);
    setPublications(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, publications };
};

export default useCreatorPublications;
