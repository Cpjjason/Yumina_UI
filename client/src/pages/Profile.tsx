import { Layout } from "@/components/layout/Layout";
import { MapPin, Link as LinkIcon, Calendar, Edit3, Settings, Share2, Play, Heart, Clock, Award, ChevronRight, Grid, List, Eye, Shield, Globe, Sliders, Database, Key, Check, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import EditProfileModal from "@/components/profile/EditProfileModal";

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const isCreator = true;

  const works = [
    { id: 1, title: "Echoes of Eternity", genre: "Visual Novel", plays: "12.4K", likes: "3.2K", image: "/images/game1.png" },
    { id: 2, title: "Crimson Protocol", genre: "RPG", plays: "8.9K", likes: "1.5K", image: "/images/game2.png" },
    { id: 3, title: "Astral Archives", genre: "Card Game", plays: "45.1K", likes: "12K", image: "/images/game3.png" },
  ];

  const following = [
    { id: 1, name: "Kaelen Arts", role: "Illustrator", image: "/images/author1.png" },
    { id: 2, name: "Nova Studios", role: "Developer", image: "/images/author2.png" },
    { id: 3, name: "Zephyr", role: "Writer", image: "/images/avatar.png" },
  ];

  return (
    <Layout>
      <EditProfileModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      <div className="pb-20">
        {/* Banner */}
        <div className="h-[280px] w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent z-10" />
          <img 
            src="/images/banner.png" 
            alt="Profile Banner" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Profile Info Container */}
        <div className="max-w-[1200px] mx-auto px-8 relative z-20 -mt-24">
          
          {/* Header Section */}
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-end gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-base relative z-10 shadow-2xl">
                  <img 
                    src="/images/avatar.png" 
                    alt="User Avatar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop";
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-base rounded-full flex items-center justify-center border-2 border-base z-20">
                  <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center text-black">
                    <Award className="w-3 h-3" />
                  </div>
                </div>
              </div>
              
              <div className="mb-2">
                <h1 className="text-3xl font-black text-main flex items-center gap-3">
                  Nox_Lumina
                  {isCreator && (
                    <span className="text-xs font-bold bg-gold/10 text-gold px-2 py-1 rounded-md uppercase tracking-wider">Creator</span>
                  )}
                </h1>
                <p className="text-sub mt-1">@noxlumina_dev</p>
              </div>
            </div>

            <div className="flex gap-3 mb-2">
              <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-main font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button 
                onClick={() => setIsEditModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-main font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Edit Profile
              </button>
              <button className="px-6 py-2 rounded-xl bg-gold hover:bg-[#FCE38A] text-black font-bold text-sm transition-colors shadow-[0_0_15px_rgba(243,211,97,0.2)]">
                Follow
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column - Details */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-main mb-3">About</h3>
                <p className="text-sm text-sub leading-relaxed mb-6">
                  Indie game developer specializing in atmospheric RPGs and visual novels. Building worlds where dreams and nightmares collide.
                </p>
                
                <div className="space-y-3 text-sm text-sub/80">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold/70" />
                    <span>Tokyo, Japan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <LinkIcon className="w-4 h-4 text-gold/70" />
                    <a href="#" className="text-gold hover:underline">noxlumina.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gold/70" />
                    <span>Joined Dec 2023</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-main mb-4">Platform Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sub/60 text-xs font-semibold uppercase tracking-wider mb-1">Followers</div>
                    <div className="text-xl font-bold text-main">14.2K</div>
                  </div>
                  <div>
                    <div className="text-sub/60 text-xs font-semibold uppercase tracking-wider mb-1">Following</div>
                    <div className="text-xl font-bold text-main">248</div>
                  </div>
                  <div>
                    <div className="text-sub/60 text-xs font-semibold uppercase tracking-wider mb-1">Library</div>
                    <div className="text-xl font-bold text-main">156</div>
                  </div>
                  <div>
                    <div className="text-sub/60 text-xs font-semibold uppercase tracking-wider mb-1">Likes</div>
                    <div className="text-xl font-bold text-main">45K</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 flex items-center justify-between px-4 py-3 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] rounded-xl transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-main">Creator Hub</span>
                </div>
                <ChevronRight className="w-4 h-4 text-sub group-hover:text-gold transition-colors" />
              </button>
            </div>

            {/* Right Column - Content */}
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              
              {/* Custom Tabs */}
              <div className="flex gap-8 border-b border-white/10 mb-8">
                {['overview', 'works', 'followed', 'activity', 'settings', 'config'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold tracking-wide capitalize transition-all relative ${
                      activeTab === tab ? "text-gold" : "text-sub hover:text-main"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold shadow-[0_0_10px_rgba(243,211,97,0.5)]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  


                  {/* Recently Played */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Recently Played
                      </h2>
                      <button className="text-sm font-semibold text-sub hover:text-gold transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {works.map(work => (
                        <div key={`played-${work.id}`} className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-gold/30 transition-all hover:bg-white/[0.04]">
                          <div className="aspect-[16/9] overflow-hidden relative">
                            <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop"; }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-gold/90 text-black flex items-center justify-center backdrop-blur-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <Play className="w-5 h-5 ml-1" />
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-main group-hover:text-gold transition-colors">{work.title}</h4>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-sub/60 mt-2">
                              <Clock className="w-3.5 h-3.5" /> <span>Played {work.id * 2} hours ago</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Achievements */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Achievements
                      </h2>
                      <button className="text-sm font-semibold text-sub hover:text-gold transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { title: "First Blood", game: "Crimson Protocol", icon: "⚔️", time: "2h ago", rarity: "Common" },
                        { title: "Master Collector", game: "Astral Archives", icon: "📚", time: "Yesterday", rarity: "Rare" },
                        { title: "Speed Demon", game: "Echoes of Eternity", icon: "⚡", time: "3d ago", rarity: "Epic" },
                        { title: "True Ending", game: "Echoes of Eternity", icon: "👑", time: "1w ago", rarity: "Legendary" },
                      ].map((ach, i) => (
                        <div key={i} className="group rounded-2xl bg-white/[0.02] border border-white/5 p-4 hover:border-gold/30 hover:bg-white/[0.04] transition-all cursor-pointer">
                          <div className="flex gap-4 items-center mb-3">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-inner shrink-0
                              ${ach.rarity === 'Legendary' ? 'bg-gradient-to-br from-yellow-500/20 to-amber-600/20 shadow-yellow-500/10' : 
                                ach.rarity === 'Epic' ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 shadow-purple-500/10' : 
                                ach.rarity === 'Rare' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 shadow-blue-500/10' : 
                                'bg-white/5'}`}
                            >
                              {ach.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-main text-sm truncate">{ach.title}</h4>
                              <p className="text-xs text-sub truncate">{ach.game}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                            <span className={
                              ach.rarity === 'Legendary' ? 'text-yellow-500' : 
                              ach.rarity === 'Epic' ? 'text-purple-400' : 
                              ach.rarity === 'Rare' ? 'text-blue-400' : 
                              'text-sub'
                            }>{ach.rarity}</span>
                            <span className="text-sub/50">{ach.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>



                  {/* Reviews & Activity */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Recent Reviews
                      </h2>
                      <button className="text-sm font-semibold text-sub hover:text-gold transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-gold/30 hover:bg-white/[0.04] transition-all">
                        <div className="flex gap-4">
                          <img src="/images/game2.png" className="w-16 h-16 rounded-xl object-cover" alt="Crimson Protocol" 
                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop"; }}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-main">Crimson Protocol</h4>
                              <span className="text-xs text-sub">3 days ago</span>
                            </div>
                            <div className="flex text-gold mb-2 text-sm">
                              ★★★★★
                            </div>
                            <p className="text-sm text-sub leading-relaxed line-clamp-2">
                              The combat system is incredibly deep. I spent over 40 hours just experimenting with different build combinations. The art style matches the grimdark aesthetic perfectly. Highly recommended for fans of tactical RPGs.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-gold/30 hover:bg-white/[0.04] transition-all">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                            <Award className="w-8 h-8 text-sub/50" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-main">Astral Archives</h4>
                              <span className="text-xs text-sub">1 week ago</span>
                            </div>
                            <div className="flex text-gold mb-2 text-sm">
                              ★★★★☆
                            </div>
                            <p className="text-sm text-sub leading-relaxed line-clamp-2">
                              Great deckbuilding mechanics with a steep but rewarding learning curve. The story gets really interesting around chapter 2. Docking one star because some late-game bosses feel a bit RNG-heavy, but overall a solid experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Collections / Favorites */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Collections & Favorites
                      </h2>
                      <button className="text-sm font-semibold text-sub hover:text-gold transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-gold/30 transition-all cursor-pointer">
                        <div className="aspect-square bg-gradient-to-br from-gold/20 to-base p-4 flex flex-col justify-end relative overflow-hidden">
                          <Heart className="w-6 h-6 text-gold mb-2" fill="currentColor" />
                          <h4 className="font-bold text-main relative z-10">Favorite Games</h4>
                          <span className="text-xs text-sub relative z-10">24 Items</span>
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                      </div>
                      
                      <div className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-gold/30 transition-all cursor-pointer">
                        <div className="aspect-square bg-gradient-to-br from-[#818cf8]/20 to-base p-4 flex flex-col justify-end relative overflow-hidden">
                          <Clock className="w-6 h-6 text-[#818cf8] mb-2" />
                          <h4 className="font-bold text-main relative z-10">Play Later</h4>
                          <span className="text-xs text-sub relative z-10">12 Items</span>
                          <div className="absolute top-0 right-0 w-24 h-24 bg-[#818cf8]/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  {/* Pinned/Featured Work (Only shown if user is a creator and has pinned something) */}
                  {isCreator && (
                    <section>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-main flex items-center gap-2">
                          <div className="w-1 h-4 bg-gold rounded-full"></div>
                          Featured Work
                        </h2>
                        <span className="text-xs font-semibold bg-white/5 px-3 py-1 rounded-full text-sub border border-white/5 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-gold" />
                          Pinned by Creator
                        </span>
                      </div>
                      
                      <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col md:flex-row hover:border-gold/30 transition-colors">
                        <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative overflow-hidden">
                          <img 
                            src="/images/game3.png" 
                            alt="Astral Archives" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop";
                            }}
                          />
                          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-gold uppercase tracking-wider">
                            Editor's Choice
                          </div>
                        </div>
                        <div className="p-6 md:w-3/5 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-2xl font-bold text-main">Astral Archives</h3>
                              <div className="flex gap-2">
                                <span className="bg-white/5 border border-white/10 text-xs px-2 py-1 rounded-md text-sub">Card Game</span>
                              </div>
                            </div>
                            <p className="text-sub text-sm leading-relaxed mb-6 line-clamp-3">
                              Dive into the ancient astral library. Collect forbidden spells, battle corrupted guardians, and uncover the mysteries of the universe in this strategic deck-builder with deep lore.
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-4 text-sm text-sub/80">
                              <div className="flex items-center gap-1.5"><Play className="w-4 h-4 text-white/40" /> 45.1K Plays</div>
                              <div className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-white/40" /> 12K Likes</div>
                            </div>
                            <button className="bg-white/10 hover:bg-white/20 text-main px-6 py-2 rounded-xl text-sm font-semibold transition-colors">
                              Play Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Followed Authors */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Followed Creators
                      </h2>
                    </div>
                    
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                      {following.map(user => (
                        <div key={user.id} className="min-w-[140px] bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/[0.05] transition-colors cursor-pointer group">
                          <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full object-cover mb-3 ring-2 ring-transparent group-hover:ring-gold/50 transition-all" 
                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"; }}
                          />
                          <h5 className="font-bold text-sm text-main group-hover:text-gold transition-colors">{user.name}</h5>
                          <span className="text-xs text-sub mt-1">{user.role}</span>
                        </div>
                      ))}
                      
                      <div className="min-w-[140px] bg-white/[0.01] border border-white/5 border-dashed rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.03] transition-colors cursor-pointer text-sub hover:text-main">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold">View All 248</span>
                      </div>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'works' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <button className="px-4 py-1.5 rounded-full bg-white/10 text-main text-sm font-semibold">All (12)</button>
                      <button className="px-4 py-1.5 rounded-full bg-transparent border border-white/10 text-sub hover:text-main hover:bg-white/5 text-sm font-medium transition-all">Published (8)</button>
                      <button className="px-4 py-1.5 rounded-full bg-transparent border border-white/10 text-sub hover:text-main hover:bg-white/5 text-sm font-medium transition-all">Drafts (4)</button>
                    </div>
                    <div className="flex gap-2 bg-white/5 p-1 rounded-lg">
                      <button className="p-1.5 bg-white/10 rounded-md text-main shadow"><Grid className="w-4 h-4" /></button>
                      <button className="p-1.5 text-sub hover:text-main"><List className="w-4 h-4" /></button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {works.map(work => (
                      <div key={work.id} className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-gold/30 transition-all">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop"; }}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-main group-hover:text-gold transition-colors mb-1">{work.title}</h4>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-sub">{work.genre}</span>
                            <span className="text-gold/80 font-medium">Public</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Create New Card */}
                    <div className="rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center aspect-[4/3] hover:border-gold/50 hover:bg-gold/5 transition-all cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-gold/20 flex items-center justify-center mb-3 transition-colors">
                        <Edit3 className="w-5 h-5 text-sub group-hover:text-gold transition-colors" />
                      </div>
                      <span className="font-bold text-main group-hover:text-gold transition-colors">Create New Work</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Empty states for other tabs to show it's functional UI */}
              {(activeTab === 'followed' || activeTab === 'activity') && (
                <div className="h-64 flex flex-col items-center justify-center text-sub border border-white/5 rounded-2xl bg-white/[0.01] animate-in fade-in duration-500">
                  <Clock className="w-10 h-10 mb-4 opacity-20" />
                  <p>Content for {activeTab} will appear here.</p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-main mb-1">Account Settings</h2>
                    <p className="text-sm text-sub">Manage your account preferences and content filters.</p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Content Filter Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <Eye className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-main text-lg">Content Filtering</h3>
                          <p className="text-xs text-sub">Control what type of content you see on the platform.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div>
                            <div className="font-semibold text-main">Show 18+ Content</div>
                            <div className="text-xs text-sub mt-1">Allow display of mature and sensitive content.</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold border border-white/10"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div>
                            <div className="font-semibold text-main">Blur Sensitive Media</div>
                            <div className="text-xs text-sub mt-1">Automatically blur potentially sensitive images until clicked.</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold border border-white/10"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-main text-lg">Privacy</h3>
                          <p className="text-xs text-sub">Manage who can interact with you.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                         <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div>
                            <div className="font-semibold text-main">Private Profile</div>
                            <div className="text-xs text-sub mt-1">Only followers can see your activity and works.</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold border border-white/10"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Personalization Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-main text-lg">Personalization</h3>
                          <p className="text-xs text-sub">Language and regional preferences.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div>
                            <div className="font-semibold text-main">Language</div>
                            <div className="text-xs text-sub mt-1">Select your preferred language.</div>
                          </div>
                          <select className="bg-white/5 border border-white/10 text-main text-sm rounded-lg focus:ring-gold focus:border-gold block p-2 outline-none cursor-pointer">
                            <option value="en">English (US)</option>
                            <option value="zh">中文 (简体)</option>
                            <option value="ja">日本語</option>
                            <option value="ko">한국語</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Account Links Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <LinkIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-main text-lg">Connected Accounts</h3>
                          <p className="text-xs text-sub">Manage your linked social accounts and platforms.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                         <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                              <span className="font-bold text-sm">X</span>
                            </div>
                            <div>
                              <div className="font-semibold text-main">Twitter (X)</div>
                              <div className="text-xs text-sub mt-1 text-gold">@noxlumina_dev</div>
                            </div>
                          </div>
                          <button className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-semibold transition-colors">
                            Disconnect
                          </button>
                        </div>

                         <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded bg-[#5865F2] flex items-center justify-center text-white">
                              <span className="font-bold text-sm">D</span>
                            </div>
                            <div>
                              <div className="font-semibold text-main">Discord</div>
                              <div className="text-xs text-sub mt-1">Not connected</div>
                            </div>
                          </div>
                          <button className="px-4 py-1.5 rounded-lg bg-gold hover:bg-[#FCE38A] text-black text-sm font-bold transition-colors">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Notification Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-main text-lg">Notifications</h3>
                          <p className="text-xs text-sub">How we contact you about activity on your account.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <div>
                            <div className="font-semibold text-main">Email Notifications</div>
                            <div className="text-xs text-sub mt-1">Receive an email when someone comments on your work.</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold border border-white/10"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
                      <button className="px-6 py-2 rounded-xl bg-gold hover:bg-[#FCE38A] text-black font-bold transition-colors shadow-[0_0_15px_rgba(243,211,97,0.2)]">
                        Save Changes
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* Config Tab Content */}
              {activeTab === 'config' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-main mb-1">Configs</h2>
                    </div>
                    <button className="text-sub hover:text-main text-sm transition-colors">
                      Reset to defaults
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Generation Settings Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="mb-6">
                        <h3 className="font-bold text-main text-lg mb-1">Generation Settings</h3>
                        <p className="text-xs text-sub">Global defaults for AI generation.</p>
                      </div>
                      
                      <div className="space-y-6">
                        {/* Context Size */}
                        <div className="border-b border-white/5 pb-6">
                          <div className="flex justify-between items-center mb-3">
                            <label className="font-semibold text-main text-sm">Context / Memory Size</label>
                            <span className="text-xs text-sub">200,000 tokens</span>
                          </div>
                          <input 
                            type="text" 
                            defaultValue="200000"
                            className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-main focus:outline-none focus:border-gold/50 transition-colors"
                          />
                          <p className="text-xs text-sub mt-2">How many tokens of conversation history the AI can see (4,096 - 2,000,000)</p>
                        </div>

                        {/* Response Length */}
                        <div className="border-b border-white/5 pb-6">
                          <div className="flex justify-between items-center mb-3">
                            <label className="font-semibold text-main text-sm">Response Length</label>
                            <span className="text-xs text-sub">12,000 tokens</span>
                          </div>
                          <input 
                            type="text" 
                            defaultValue="12000"
                            className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-main focus:outline-none focus:border-gold/50 transition-colors"
                          />
                          <p className="text-xs text-sub mt-2">Maximum tokens per AI response (256 - 32,768)</p>
                        </div>

                        {/* Creativity / Temperature */}
                        <div className="border-b border-white/5 pb-6">
                          <div className="flex justify-between items-center mb-4">
                            <label className="font-semibold text-main text-sm">Creativity / Temperature</label>
                            <span className="text-xs text-sub">1.0</span>
                          </div>
                          <div className="relative w-full h-1.5 bg-white/10 rounded-full mb-3">
                            <div className="absolute top-0 left-0 h-full w-1/2 bg-gold rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_10px_rgba(243,211,97,0.5)]"></div>
                          </div>
                          <div className="flex justify-between text-xs text-sub">
                            <span>Precise (0)</span>
                            <span>Creative (2)</span>
                          </div>
                        </div>

                        {/* Streaming Toggle */}
                        <div className="flex items-center justify-between pb-2">
                          <div>
                            <div className="font-semibold text-main text-sm">Streaming</div>
                            <div className="text-xs text-sub mt-1">Show AI responses as they generate</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold border border-white/10"></div>
                          </label>
                        </div>
                        
                        <div className="pt-2">
                          <button className="flex items-center gap-2 text-sub hover:text-main text-sm font-medium transition-colors">
                            <ChevronRight className="w-4 h-4" />
                            Advanced Parameters
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Default Model Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="mb-5">
                        <h3 className="flex items-center gap-2 font-bold text-main text-lg mb-1">
                          <Database className="w-5 h-5" />
                          Default Model
                        </h3>
                        <p className="text-xs text-sub">Choose the AI model used for all conversations.</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] cursor-pointer transition-colors">
                          <div className="font-bold text-main text-sm">Gemini 3.1 Pro</div>
                          <div className="text-xs text-sub mt-1">Best overall</div>
                        </div>
                        
                        <div className="p-4 border border-gold/30 rounded-xl bg-gold/5 cursor-pointer flex justify-between items-center transition-colors">
                          <div>
                            <div className="font-bold text-main text-sm">Claude Opus 4.5</div>
                            <div className="text-xs text-sub mt-1 text-gold/80">Creative powerhouse</div>
                          </div>
                          <Check className="w-5 h-5 text-gold" />
                        </div>

                        <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] cursor-pointer transition-colors">
                          <div className="font-bold text-main text-sm">Grok 4.1 Fast</div>
                          <div className="text-xs text-sub mt-1">Fast & efficient</div>
                        </div>
                        
                        <button className="flex items-center gap-2 text-sub hover:text-main text-sm font-medium transition-colors p-2 w-full text-left mt-2">
                          <Database className="w-4 h-4" />
                          Browse all models...
                        </button>
                      </div>
                    </div>

                    {/* API Keys Section */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                      <div className="mb-5">
                        <h3 className="flex items-center gap-2 font-bold text-main text-lg mb-1">
                          <Key className="w-5 h-5" />
                          API Keys
                        </h3>
                        <p className="text-xs text-sub">Manage your LLM provider API keys. Keys are encrypted at rest.</p>
                      </div>
                      
                      <div className="flex gap-3 mb-2">
                        <select className="bg-white/[0.02] border border-white/5 text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 min-w-[140px] appearance-none cursor-pointer">
                          <option>OpenRouter</option>
                          <option>OpenAI</option>
                          <option>Anthropic</option>
                        </select>
                        <input 
                          type="text" 
                          placeholder="Default"
                          className="bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-main focus:outline-none focus:border-gold/50 w-32"
                        />
                        <input 
                          type="text" 
                          placeholder="sk-or-v1-..."
                          className="bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-main focus:outline-none focus:border-gold/50 flex-1 font-mono"
                        />
                        <button className="w-[46px] h-[46px] bg-gold/10 hover:bg-gold/20 text-gold rounded-xl flex items-center justify-center transition-colors">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-xs text-sub mb-6">Get your API key from <a href="#" className="text-gold hover:underline">OpenRouter</a></p>

                      <div className="p-4 border border-white/5 rounded-xl bg-white/[0.02] flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-bold text-main text-sm">Default</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#6366f1]/20 text-[#818cf8] uppercase tracking-wider">openrouter</span>
                          </div>
                          <div className="text-xs text-sub/60">2/22/2026</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="px-4 py-1.5 rounded-lg border border-white/10 text-main text-sm font-semibold hover:bg-white/5 transition-colors">
                            Verify
                          </button>
                          <button className="p-2 text-sub hover:text-destructive transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}