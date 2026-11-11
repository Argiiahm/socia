export type PublicationTypes = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  thumbnail: string | null;
  reading_time: number;

  author: {
    id: string;
    fullname: string;
    username: string;
  };

  status: "draft" | "published" | "archived";
  published_at: string | null;
  created_at: string;
  updated_at: string;
};
