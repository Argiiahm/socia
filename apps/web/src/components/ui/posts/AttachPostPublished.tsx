const AttachPostPublished = ({ post }: any) => {
  return (
    <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-100/50 p-3">
      <h4 className="text-sm font-bold">{post.article.title}</h4>
      <p className="mt-1 leading-relaxed text-zinc-400">
        {post.article.description}
      </p>

      <div className="mt-2 flex items-center gap-2 text-[10px] text-zinc-500">
        <span>{post.article.readTime}</span>
        <span>·</span>
        <span>{post.article.reactions}</span>
      </div>
    </div>
  );
};

export default AttachPostPublished;
