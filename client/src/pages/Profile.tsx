import { Layout } from "@/components/layout/Layout";
import { MapPin, Link as LinkIcon, Calendar, Edit3, Settings, Share2, Play, Heart, Clock, Award, ChevronRight, Grid, List, Eye, Shield } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

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
                  <span className="text-xs font-bold bg-gold/10 text-gold px-2 py-1 rounded-md uppercase tracking-wider">Creator</span>
                </h1>
                <p className="text-sub mt-1">@noxlumina_dev</p>
              </div>
            </div>

            <div className="flex gap-3 mb-2">
              <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-main font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-main font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2">
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
                    <div className="text-xl font-bold text-main">12.5K</div>
                  </div>
                  <div>
                    <div className="text-sub/60 text-xs font-semibold uppercase tracking-wider mb-1">Following</div>
                    <div className="text-xl font-bold text-main">248</div>
                  </div>
                  <div>
                    <div className="text-sub/60 text-xs font-semibold uppercase tracking-wider mb-1">Total Plays</div>
                    <div className="text-xl font-bold text-main">280K</div>
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
                {['overview', 'works', 'followed', 'activity', 'settings'].map((tab) => (
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
                <div className="space-y-10">
                  
                  {/* Pinned/Featured Work */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Featured Work
                      </h2>
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

                  {/* Recent Works Grid */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-main flex items-center gap-2">
                        <div className="w-1 h-4 bg-gold rounded-full"></div>
                        Recent Works
                      </h2>
                      <button className="text-sm font-semibold text-sub hover:text-gold transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {works.slice(0,2).map(work => (
                        <div key={work.id} className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-gold/30 transition-all hover:bg-white/[0.04]">
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
                            <div className="text-xs text-sub mb-3">{work.genre}</div>
                            <div className="flex items-center justify-between text-xs text-sub/60 pt-3 border-t border-white/5">
                              <span className="flex items-center gap-1.5"><Play className="w-3.5 h-3.5" /> {work.plays}</span>
                              <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5" /> {work.likes}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  
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

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}