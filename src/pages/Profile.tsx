import React from 'react';
import { User, Phone, MapPin, Shield, LogOut, ChevronRight, Settings } from 'lucide-react';
import { useAuth } from '@/src/contexts/AuthContext';

export default function Profile() {
  const { user, profile, logout } = useAuth();

  return (
    <div className="space-y-6">
      <header className="text-center py-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full bg-stone-200 border-4 border-white shadow-xl overflow-hidden mx-auto">
            <img src={user?.photoURL || "https://picsum.photos/seed/farmer/200/200"} alt="Profile" referrerPolicy="no-referrer" />
          </div>
          <button className="absolute bottom-0 right-0 bg-emerald-600 text-white p-1.5 rounded-full border-2 border-white shadow-lg">
            <Settings size={14} />
          </button>
        </div>
        <h2 className="text-2xl font-bold mt-4 text-stone-900">{user?.displayName || profile?.name || 'User'}</h2>
        <p className="text-stone-500 font-medium capitalize">{profile?.role || 'Member'} • Pod Shakti Nagar</p>
      </header>

      <div className="space-y-4">
        <section className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          <ProfileItem icon={<User size={18} />} label="Full Name" value={user?.displayName || profile?.name || 'Not set'} />
          <ProfileItem icon={<Phone size={18} />} label="Phone Number" value={user?.phoneNumber || profile?.phone || '+91 98765 43210'} />
          <ProfileItem icon={<MapPin size={18} />} label="Location" value="Mirzapur, Varanasi, UP" />
          <ProfileItem icon={<Shield size={18} />} label="Role" value={profile?.role ? (profile.role.charAt(0).toUpperCase() + profile.role.slice(1)) : 'Member'} />
        </section>

        <section className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          <MenuAction label="My Land Details" />
          <MenuAction label="Bank Account" />
          <MenuAction label="Language Settings" />
          <MenuAction label="Help & Support" />
        </section>

        <button 
          onClick={logout}
          className="w-full py-4 bg-rose-50 text-rose-600 font-bold rounded-2xl flex items-center justify-center gap-2 border border-rose-100 hover:bg-rose-100 transition-colors"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

function ProfileItem({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-stone-50 last:border-0">
      <div className="text-stone-400">{icon}</div>
      <div>
        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-stone-700">{value}</p>
      </div>
    </div>
  );
}

function MenuAction({ label }: { label: string }) {
  return (
    <button className="w-full flex items-center justify-between p-4 border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      <ChevronRight size={18} className="text-stone-300" />
    </button>
  );
}
