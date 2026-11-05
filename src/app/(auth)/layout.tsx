const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-zinc-950 px-5 text-white">
      {children}
    </main>
  );
};

export default AuthLayout;
