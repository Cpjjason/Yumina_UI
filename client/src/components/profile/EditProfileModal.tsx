import { useState } from 'react';
import { Camera, Mail, User, Shield, Key, Bell, Globe, Save, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const [activeTab, setActiveTab] = useState('general');
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
      <DialogContent className="max-w-4xl bg-[#0A0A08] border-white/10 p-0 overflow-hidden text-main gap-0">
        <DialogTitle className="sr-only">Edit Profile</DialogTitle>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.01]">
          <div>
            <h2 className="text-xl font-bold text-main">Edit Profile</h2>
            <p className="text-xs text-sub mt-1">Manage your account settings and preferences.</p>
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
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="flex h-[600px]">
          {/* Left Sidebar for Settings Navigation */}
          <div className="w-64 shrink-0 border-r border-white/5 bg-white/[0.01] p-4 overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => setActiveTab('general')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'general' 
                    ? 'bg-gold/10 text-gold border border-gold/20' 
                    : 'text-sub hover:bg-white/5 hover:text-main border border-transparent'
                }`}
              >
                <User className="w-4 h-4" />
                General Profile
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'account' 
                    ? 'bg-gold/10 text-gold border border-gold/20' 
                    : 'text-sub hover:bg-white/5 hover:text-main border border-transparent'
                }`}
              >
                <Shield className="w-4 h-4" />
                Account & Security
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'notifications' 
                    ? 'bg-gold/10 text-gold border border-gold/20' 
                    : 'text-sub hover:bg-white/5 hover:text-main border border-transparent'
                }`}
              >
                <Bell className="w-4 h-4" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'privacy' 
                    ? 'bg-gold/10 text-gold border border-gold/20' 
                    : 'text-sub hover:bg-white/5 hover:text-main border border-transparent'
                }`}
              >
                <Globe className="w-4 h-4" />
                Privacy
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-8 overflow-y-auto bg-base">
            
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                
                {/* Avatar & Banner */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-main flex items-center gap-2">
                    <div className="w-1 h-4 bg-gold rounded-full"></div>
                    Profile Images
                  </h3>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative group cursor-pointer">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-gold/50 transition-colors">
                          <img 
                            src="/images/avatar2.jpg" 
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
                          src="/images/game1.png" 
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
                  <h3 className="text-lg font-bold text-main flex items-center gap-2">
                    <div className="w-1 h-4 bg-gold rounded-full"></div>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="display-name" className="text-sub">Display Name</Label>
                      <Input 
                        id="display-name" 
                        defaultValue="Nox Lumina" 
                        className="bg-white/5 border-white/10 text-main focus-visible:ring-gold/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-sub">Username</Label>
                      <Input 
                        id="username" 
                        defaultValue="@noxlumina" 
                        className="bg-white/5 border-white/10 text-main focus-visible:ring-gold/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-sub">Bio</Label>
                    <textarea 
                      id="bio"
                      className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-main shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] resize-y"
                      defaultValue="Wandering through digital worlds. Lover of RPGs and indie gems. Level 42."
                    />
                    <p className="text-xs text-sub/60">Brief description for your profile.</p>
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
            )}

            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-main flex items-center gap-2">
                    <div className="w-1 h-4 bg-gold rounded-full"></div>
                    Login Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg text-sub"><Mail className="w-5 h-5" /></div>
                        <div>
                          <p className="font-semibold text-main text-sm">Email Address</p>
                          <p className="text-xs text-sub">nox.lumina@example.com</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-white/10 text-main hover:bg-white/10 hover:text-main">
                        Change
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg text-sub"><Key className="w-5 h-5" /></div>
                        <div>
                          <p className="font-semibold text-main text-sm">Password</p>
                          <p className="text-xs text-sub">Last changed 3 months ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-white/10 text-main hover:bg-white/10 hover:text-main">
                        Update
                      </Button>
                    </div>
                  </div>
                </section>

                <hr className="border-white/5" />

                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                    <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                    Danger Zone
                  </h3>
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                    <h4 className="font-bold text-main text-sm mb-1">Delete Account</h4>
                    <p className="text-xs text-sub mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <Button variant="destructive" size="sm" className="bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 border-none">
                      Delete Account
                    </Button>
                  </div>
                </section>
              </div>
            )}

            {/* Settings Placeholders */}
            {(activeTab === 'notifications' || activeTab === 'privacy') && (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4">
                  {activeTab === 'notifications' ? <Bell className="w-8 h-8 text-sub/50" /> : <Globe className="w-8 h-8 text-sub/50" />}
                </div>
                <h3 className="text-xl font-bold text-main mb-2">
                  {activeTab === 'notifications' ? 'Notification Settings' : 'Privacy Settings'}
                </h3>
                <p className="text-sub text-sm max-w-md">
                  Configure your preferences to tailor the Yumina experience to your liking.
                </p>
                
                {/* Dummy toggles just for visual mockup */}
                <div className="w-full max-w-md mt-8 space-y-4 text-left">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                      <div>
                        <p className="font-semibold text-main text-sm">
                          {activeTab === 'notifications' ? `Email Notification ${i}` : `Privacy Setting ${i}`}
                        </p>
                        <p className="text-xs text-sub">Brief description of this setting</p>
                      </div>
                      <Switch defaultChecked={i === 1} />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
