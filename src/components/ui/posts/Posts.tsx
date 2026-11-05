import { posts } from "@/data/Posts";
import PostCard from "./PostCard";

const PostsSection = () => {
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostsSection;
