import { useState } from 'react';
import { Camera, Save, X, Star, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onClose();
    }, 800);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-[#0A0A08] border-white/10 p-0 overflow-hidden text-main gap-0 shadow-2xl shadow-gold/5">
        <DialogTitle className="sr-only">Edit Profile</DialogTitle>
        
        {/* Header with decorative elements */}
        <div className="relative flex items-center justify-between p-6 border-b border-white/5 bg-gradient-to-r from-base to-gold/5 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-main flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              Edit Profile
            </h2>
            <p className="text-xs text-sub mt-1">Customize how the world sees your Yumina persona.</p>
          </div>
          
          <div className="flex items-center gap-3 relative z-10">
            <Button 
              onClick={onClose} 
              variant="ghost" 
              className="text-sub hover:text-main hover:bg-white/5 h-10 px-4 rounded-xl font-semibold"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={isSaving}
              className="h-10 px-6 rounded-xl bg-gold hover:bg-[#FCE38A] text-black font-bold transition-all shadow-[0_0_15px_rgba(243,211,97,0.2)] border-none"
            >
              {isSaving ? 'Saving...' : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-8 bg-base relative">
          
          <div className="space-y-10 animate-in fade-in duration-300 relative z-10">
            
            {/* Visual Identity Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-main">Visual Identity</h3>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/20 transition-all">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10 items-center md:items-start">
                  {/* Avatar Upload */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative group/avatar cursor-pointer">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/10 group-hover/avatar:border-gold shadow-lg transition-all">
                        <img 
                          src="/images/avatar.png" 
                          alt="Avatar" 
                          className="w-full h-full object-cover group-hover/avatar:scale-105 transition-transform duration-500"
                          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"; }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                          <Camera className="w-6 h-6 text-white mb-1" />
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">Change</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-base rounded-full flex items-center justify-center border-2 border-base">
                        <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center text-black">
                          <Plus className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Banner Upload */}
                  <div className="flex-1 w-full">
                    <div className="relative group/banner cursor-pointer w-full h-32 rounded-2xl overflow-hidden border-2 border-white/10 group-hover/banner:border-gold shadow-lg transition-all">
                      <img 
                        src="/images/banner.png" 
                        alt="Banner" 
                        className="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-500"
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-opacity backdrop-blur-sm bg-black/40">
                        <Camera className="w-8 h-8 text-white mb-2" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Upload New Banner</span>
                      </div>
                      
                      <div className="absolute bottom-3 left-4 text-xs font-medium text-white/60 group-hover/banner:opacity-0 transition-opacity">
                        Recommended: 1500x500px
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Basic Info */}
            <section className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="display-name" className="text-sub font-semibold text-xs uppercase tracking-wider">Display Name</Label>
                  <Input 
                    id="display-name" 
                    defaultValue="shabichengpeijie" 
                    className="bg-white/[0.02] border-white/10 text-main h-12 rounded-xl focus-visible:ring-gold/50 focus-visible:border-gold/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sub font-semibold text-xs uppercase tracking-wider">Username</Label>
                  <Input 
                    id="username" 
                    defaultValue="@shabichengpeijie_dev" 
                    className="bg-white/[0.02] border-white/10 text-main h-12 rounded-xl focus-visible:ring-gold/50 focus-visible:border-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sub font-semibold text-xs uppercase tracking-wider flex justify-between">
                  <span>About You</span>
                  <span className="text-sub/50">120/300</span>
                </Label>
                <textarea 
                  id="bio"
                  className="flex w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-main shadow-sm placeholder:text-sub/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:border-gold/50 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] resize-none transition-colors leading-relaxed"
                  defaultValue="Indie game developer specializing in atmospheric RPGs and visual novels. Building worlds where dreams and nightmares collide."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sub font-semibold text-xs uppercase tracking-wider">Location</Label>
                  <Input 
                    id="location" 
                    defaultValue="Tokyo, Japan" 
                    className="bg-white/[0.02] border-white/10 text-main h-12 rounded-xl focus-visible:ring-gold/50 focus-visible:border-gold/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sub font-semibold text-xs uppercase tracking-wider">Website Link</Label>
                  <Input 
                    id="website" 
                    defaultValue="https://noxlumina.com" 
                    className="bg-white/[0.02] border-white/10 text-main h-12 rounded-xl focus-visible:ring-gold/50 focus-visible:border-gold/50 transition-colors"
                  />
                </div>
              </div>
            </section>
            
            <hr className="border-white/5" />

            {/* Featured Work (Creator Only) */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    <Star className="w-4 h-4" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-main">Featured Work</h3>
                    <p className="text-xs text-sub">Pin a specific game or project to the top of your profile overview.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 border-dashed rounded-2xl p-4 hover:border-gold/30 hover:bg-white/[0.04] transition-all">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Current Featured Item Preview */}
                  <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden relative shadow-lg shrink-0">
                    <img 
                      src="/images/game3.png" 
                      alt="Astral Archives" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop"; }}
                    />
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur text-gold text-[10px] font-bold px-2 py-1 rounded uppercase">Pinned</div>
                  </div>
                  
                  <div className="flex-1 w-full space-y-4">
                    <div>
                      <h4 className="font-bold text-main mb-1">Astral Archives</h4>
                      <p className="text-xs text-sub line-clamp-2">Dive into the ancient astral library. Collect forbidden spells, battle corrupted guardians, and uncover the mysteries of the universe...</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <select className="bg-base border border-white/10 text-main text-sm rounded-xl focus:ring-gold focus:border-gold block w-full p-3 outline-none cursor-pointer">
                        <option value="none">-- None (Don't feature anything) --</option>
                        <option value="1">Echoes of Eternity</option>
                        <option value="2">Crimson Protocol</option>
                        <option value="3" selected>Astral Archives</option>
                        <option value="4">Project: Neon (Draft)</option>
                      </select>
                      
                      <Button variant="outline" className="h-11 border-white/10 hover:bg-white/5 hover:text-main whitespace-nowrap">
                        Select Game
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
// Adding an unused import here to make it easier for the automated script to replace the icon Plus if needed.
import { Plus } from "lucide-react";