import { posts } from "@/data/Posts";
import ThreadCard from "./ThreadCard";

const ThreadsSection = () => {
  return (
    <section>
      {posts.map((post) => (
        <ThreadCard key={post.id} thread={post} />
      ))}
    </section>
  );
};

export default ThreadsSection;
