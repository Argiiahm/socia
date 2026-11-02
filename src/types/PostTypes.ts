export type PostType = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  time: string;
  content: string;
  likes: string;
  comments: string;
  reposts: string;
  type: "text" | "product" | "article";
  product?: {
    name: string;
    description: string;
    price: string;
  };
  article?: {
    category: string;
    title: string;
    description: string;
    readTime: string;
    reactions: string;
  };
};
