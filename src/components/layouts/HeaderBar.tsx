const HeaderBar = ({ title }: { title: string }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/50 bg-zinc-950/90 backdrop-blur-xl">
      <div className="px-4 py-3">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </header>
  );
};

export default HeaderBar;
