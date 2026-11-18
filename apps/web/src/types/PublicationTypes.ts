export type PublicationTypes = {
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
