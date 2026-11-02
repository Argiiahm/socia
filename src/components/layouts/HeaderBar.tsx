const HeaderBar = ({ title }: { title: string }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/50 bg-zinc-950/90 backdrop-blur-xl">
      <div className="px-4 py-3">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-center px-2">
        {["For you", "Following", "Trending"].map((tab, index) => (
          <button
            key={tab}
            className={`border-b-2 px-3 py-2.5 transition ${
              index === 0
                ? "border-white font-semibold text-white"
                : "border-transparent text-zinc-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </header>
  );
};

export default HeaderBar;
