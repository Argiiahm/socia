const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="fixed inset-0 flex items-center justify-center overflow-y-auto px-5">
      {children}
    </main>
  );
};

export default AuthLayout;
