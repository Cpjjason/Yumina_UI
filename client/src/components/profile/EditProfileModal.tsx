import { useState } from 'react';
import { Camera, Save } from 'lucide-react';
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
      <DialogContent className="max-w-2xl bg-[#0A0A08] border-white/10 p-0 overflow-hidden text-main gap-0">
        <DialogTitle className="sr-only">Edit Profile</DialogTitle>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.01]">
          <div>
            <h2 className="text-xl font-bold text-main">Edit Profile</h2>
            <p className="text-xs text-sub mt-1">Update your personal information and profile images.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={onClose} 
              variant="ghost" 
              className="text-sub hover:text-main hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={isSaving}
              className="bg-gold hover:bg-[#FCE38A] text-black font-bold border-none"
            >
              {isSaving ? 'Saving...' : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-8 bg-base">
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Avatar & Banner */}
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-gold/50 transition-colors">
                      <img 
                        src="/images/avatar.png" 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"; }}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-sub">Change Avatar</span>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative group cursor-pointer w-full h-24 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-gold/50 transition-colors">
                    <img 
                      src="/images/banner.png" 
                      alt="Banner" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"; }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                      <span className="ml-2 text-sm font-semibold text-white">Change Banner</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Personal Info */}
            <section className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="display-name" className="text-sub">Display Name</Label>
                  <Input 
                    id="display-name" 
                    defaultValue="Nox_Lumina" 
                    className="bg-white/5 border-white/10 text-main focus-visible:ring-gold/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sub">Username</Label>
                  <Input 
                    id="username" 
                    defaultValue="@noxlumina_dev" 
                    className="bg-white/5 border-white/10 text-main focus-visible:ring-gold/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sub">Bio</Label>
                <textarea 
                  id="bio"
                  className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-main shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] resize-y"
                  defaultValue="Indie game developer specializing in atmospheric RPGs and visual novels. Building worlds where dreams and nightmares collide."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sub">Location</Label>
                  <Input 
                    id="location" 
                    defaultValue="Tokyo, Japan" 
                    className="bg-white/5 border-white/10 text-main focus-visible:ring-gold/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sub">Website</Label>
                  <Input 
                    id="website" 
                    defaultValue="https://noxlumina.com" 
                    className="bg-white/5 border-white/10 text-main focus-visible:ring-gold/50"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
