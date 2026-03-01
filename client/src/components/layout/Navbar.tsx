import { Search, Filter, CalendarDays, Bell, HelpCircle, Moon, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[64px] bg-black/60 backdrop-blur-[24px] z-50 flex items-center justify-between px-6 border-b border-white/5">
      {/* Logo Section */}
      <div className="flex items-center gap-3 w-64">
        <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center animate-gold-breathe shadow-[0_0_15px_rgba(243,211,97,0.3)]">
          <span className="text-black font-black text-xl leading-none font-sans">Y</span>
        </div>
        <span className="text-xl font-black tracking-wide bg-gradient-to-r from-gold to-gold/60 bg-clip-text text-transparent">
          Yumina
        </span>
      </div>

      {/* Search Section */}
      <div className="flex-1 max-w-2xl flex items-center gap-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search works, artists..." 
            className="w-full h-10 bg-white/5 border border-white/10 rounded-full pl-11 pr-4 text-sm text-main placeholder:text-white/40 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="flex items-center gap-2 text-gold/80 hover:text-gold transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 text-gold/80 hover:text-gold transition-colors">
            <CalendarDays className="w-4 h-4" />
            <span>Events</span>
          </button>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-5 text-white/60">
        <button className="hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="hover:text-white transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="hover:text-white transition-colors">
          <Moon className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center ml-2 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
          <User className="w-4 h-4 text-gold/80" />
        </div>
      </div>
    </nav>
  );
}