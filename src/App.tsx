import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contracts';
import Deliveries from './pages/Deliveries';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, signIn } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-4 text-center">
        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-xl shadow-emerald-100">K</div>
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Welcome to KisanBond</h1>
        <p className="text-stone-500 mb-8 max-w-xs">Organizing small farmers for a better future and reliable rewards.</p>
        <button 
          onClick={signIn}
          className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="deliveries" element={<Deliveries />} />
            <Route path="messages" element={<Messages />} />
            <Route path="notifications" element={<div className="p-4">Notifications Page (Coming Soon)</div>} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
