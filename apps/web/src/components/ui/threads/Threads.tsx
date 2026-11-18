import { ThreadType } from "@/types/ThreadTypes";
import ThreadCard from "./ThreadCard";

const ThreadsSection = ({ threads }: { threads: ThreadType[] }) => {
  return (
    <section>
      {threads.map((post) => (
        <ThreadCard key={post.id} thread={post} />
      ))}
    </section>
  );
};

export default ThreadsSection;
