import { Plus, Users, Library, User as UserIcon } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { icon: Users, label: "Community", href: "/" },
    { icon: Library, label: "Library", href: "/library" },
    { icon: UserIcon, label: "Profile", href: "/profile" },
  ];

  return (
    <aside className="fixed left-0 top-[64px] bottom-0 w-64 border-r border-white/5 bg-base/50 backdrop-blur-md p-6 flex flex-col gap-8">
      <button className="w-full h-12 rounded-xl bg-gold text-black font-bold flex items-center justify-center gap-2 hover:bg-[#FCE38A] transition-colors shadow-[0_0_20px_rgba(243,211,97,0.15)] hover:shadow-[0_0_25px_rgba(243,211,97,0.3)]">
        <Plus className="w-5 h-5 stroke-[2.5]" />
        Create New
      </button>

      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-widest text-sub/50 uppercase mb-2 px-4">Main Menu</span>
        
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.href} href={item.href}>
              <a className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? "bg-sidebar-active text-gold shadow-[inset_2px_0_0_#F3D361]" 
                  : "text-sub hover:text-main hover:bg-white/5"
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? "text-gold" : "text-sub group-hover:text-main"} transition-colors`} />
                <span className="font-semibold text-sm">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
      
      <div className="mt-auto">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-20">
            <div className="w-8 h-8 rounded-full bg-gold blur-xl"></div>
          </div>
          <h4 className="text-sm font-bold text-main mb-1 relative z-10">System Notice</h4>
          <p className="text-xs text-sub leading-relaxed relative z-10">
            Welcome to Yumina, where dreams intertwine. Version 2.0 is now live, explore it now!
          </p>
        </div>
      </div>
    </aside>
  );
}