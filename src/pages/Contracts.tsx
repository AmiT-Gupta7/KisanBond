import React from 'react';
import { FileText, Plus, Search, Filter } from 'lucide-react';

export default function Contracts() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-stone-900">Supply Contracts</h2>
          <p className="text-stone-500">Manage your pod's collective agreements</p>
        </div>
        <button className="bg-emerald-600 text-white p-2 rounded-xl shadow-lg shadow-emerald-100 flex items-center gap-2 px-4 py-2 text-sm font-bold">
          <Plus size={18} />
          <span>New</span>
        </button>
      </header>

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
          <input 
            type="text" 
            placeholder="Search contracts..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
        <button className="p-2 bg-white border border-stone-200 rounded-xl text-stone-500">
          <Filter size={18} />
        </button>
      </div>

      <div className="space-y-4">
        <ContractCard 
          id="CON-2024-001"
          crop="Wheat"
          buyer="Varanasi Flour Mills"
          volume="500 qtl"
          price="₹2,275/qtl"
          status="Active"
          date="Apr 2024 - Jun 2024"
        />
        <ContractCard 
          id="CON-2024-002"
          crop="Paddy"
          buyer="AgroCorp India"
          volume="300 qtl"
          price="₹2,183/qtl"
          status="Pending"
          date="Jul 2024 - Sep 2024"
        />
      </div>
    </div>
  );
}

function ContractCard({ id, crop, buyer, volume, price, status, date }: any) {
  return (
    <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm hover:border-emerald-200 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center text-stone-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
            <FileText size={20} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900">{crop} Supply</h3>
            <p className="text-xs text-stone-500">{id}</p>
          </div>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${
          status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
        }`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-3 text-sm">
        <div>
          <p className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Buyer</p>
          <p className="font-medium text-stone-700">{buyer}</p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Volume</p>
          <p className="font-medium text-stone-700">{volume}</p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Base Price</p>
          <p className="font-medium text-stone-700">{price}</p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Period</p>
          <p className="font-medium text-stone-700">{date}</p>
        </div>
      </div>
    </div>
  );
}
