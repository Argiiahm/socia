export type ThreadType = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  time: string;
  content: string;
  likes: string;
  comments: string;
  reposts: string;
  type: "text" | "product" | "publication";
  product?: {
    name: string;
    description: string;
    price: string;
  };
  publication?: {
    category: string;
    title: string;
    description: string;
    readTime: string;
    reactions: string;
  };
};
