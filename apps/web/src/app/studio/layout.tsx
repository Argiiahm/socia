import Sidebar from "@/components/studio/layouts/Sidebar";

const LayoutStudio = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto min-h-screen w-full max-w-7xl">
        <Sidebar />
        <section
          className="mx-auto min-h-screen min-w-0 pb-16 lg:pb-0 w-full max-w-2xl"
        >
          {children}
        </section>
      </div>
    </main>
  )
}

export default LayoutStudio;
