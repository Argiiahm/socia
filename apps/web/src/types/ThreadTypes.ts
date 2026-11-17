export type ContentType = "PRODUCT" | "PUBLICATION";

export type ThreadType = {
  id: string;
  content: string;
  includeContentType: ContentType[];
  user: {
    username: string;
  };
  product?: {
    id: string;
    name: string;
    price: number;
    thumbnail: string;
  } | null;
  publication?: {
    id: string;
    image: string;
    title: string;
    content: string;
    user: {
      username: string;
    };
  } | null;
  createdAt: string;
};
