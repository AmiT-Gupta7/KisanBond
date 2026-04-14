import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, FileText, Truck, Bell, MessageSquare, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '@/src/contexts/AuthContext';

export default function Layout() {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-20 md:pb-0 md:pl-64">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-stone-200 p-6 z-30">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
          <h1 className="text-xl font-bold tracking-tight text-emerald-900">KisanBond</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem to="/" icon={<Home size={20} />} label="Dashboard" />
          <NavItem to="/contracts" icon={<FileText size={20} />} label="Contracts" />
          <NavItem to="/deliveries" icon={<Truck size={20} />} label="Deliveries" />
          <NavItem to="/messages" icon={<MessageSquare size={20} />} label="Messages" />
          <NavItem to="/notifications" icon={<Bell size={20} />} label="Notifications" />
          <NavItem to="/profile" icon={<User size={20} />} label="Profile" />
        </nav>

        <div className="mt-auto pt-6 border-t border-stone-100">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
              <img src={user?.photoURL || "https://picsum.photos/seed/farmer/100/100"} alt="User" referrerPolicy="no-referrer" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{user?.displayName || profile?.name || 'User'}</p>
              <p className="text-xs text-stone-500 capitalize">{profile?.role || 'Member'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Header for Mobile */}
      <header className="md:hidden sticky top-0 bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-xs">K</div>
          <h1 className="text-lg font-bold tracking-tight text-emerald-900">KisanBond</h1>
        </div>
        <button className="p-2 text-stone-500">
          <Bell size={20} />
        </button>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-5xl mx-auto">
        <Outlet />
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 flex items-center justify-around py-2 px-4 z-30">
        <MobileNavItem to="/" icon={<Home size={24} />} label="Home" />
        <MobileNavItem to="/contracts" icon={<FileText size={24} />} label="Contracts" />
        <MobileNavItem to="/deliveries" icon={<Truck size={24} />} label="Deliveries" />
        <MobileNavItem to="/messages" icon={<MessageSquare size={24} />} label="Chat" />
        <MobileNavItem to="/profile" icon={<User size={24} />} label="Profile" />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
          isActive
            ? "bg-emerald-50 text-emerald-700 font-medium"
            : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
        )
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

function MobileNavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex flex-col items-center gap-1 min-w-[64px] transition-colors",
          isActive ? "text-emerald-600" : "text-stone-400"
        )
      }
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </NavLink>
  );
}
