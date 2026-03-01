import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base text-main selection:bg-gold/30 selection:text-gold flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-[64px]">
        <Sidebar />
        <main className="flex-1 ml-64 min-h-[calc(100vh-64px)] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(243,211,97,0.03),transparent_50%)] pointer-events-none" />
          {children}
        </main>
      </div>
    </div>
  );
}