const AttachThreadPublication = ({ thread }: any) => {
  return (
    <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-100/50 p-3">
      <h4 className="text-sm font-bold">{thread.publication.title}</h4>
      <p className="mt-1 leading-relaxed text-zinc-400">
        {thread.publication.description}
      </p>

      <div className="mt-2 flex items-center gap-2 text-[10px] text-zinc-500">
        <span>{thread.publication.readTime}</span>
        <span>·</span>
        <span>{thread.publication.reactions}</span>
      </div>
    </div>
  );
};

export default AttachThreadPublication;
