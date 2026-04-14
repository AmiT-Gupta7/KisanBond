import React from 'react';
import { Truck, Calendar, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function Deliveries() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-stone-900">Deliveries</h2>
        <p className="text-stone-500">Track produce quality and fulfillment</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-stone-200 text-center">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Total Delivered</p>
          <p className="text-xl font-black text-stone-900">145 qtl</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 text-center">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Avg Quality</p>
          <p className="text-xl font-black text-emerald-600">Grade A</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Recent Deliveries</h3>
        <DeliveryItem 
          date="13 Apr 2024"
          farmer="Ram Singh"
          quantity="20 qtl"
          quality="Grade A"
          status="Accepted"
          moisture="12.5%"
        />
        <DeliveryItem 
          date="10 Apr 2024"
          farmer="Laxman Prasad"
          quantity="15 qtl"
          quality="Grade B"
          status="Accepted"
          moisture="14.2%"
        />
        <DeliveryItem 
          date="08 Apr 2024"
          farmer="Amit Gupta"
          quantity="12 qtl"
          quality="Rejected"
          status="Rejected"
          moisture="16.8%"
          reason="High Moisture"
        />
      </div>
    </div>
  );
}

function DeliveryItem({ date, farmer, quantity, quality, status, moisture, reason }: any) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        status === 'Accepted' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
      }`}>
        {status === 'Accepted' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-stone-900">{farmer}</h4>
            <p className="text-xs text-stone-500">{date} • {quantity}</p>
          </div>
          <div className="text-right">
            <p className={`text-xs font-bold ${status === 'Accepted' ? 'text-emerald-600' : 'text-rose-600'}`}>{quality}</p>
            <p className="text-[10px] text-stone-400">Moisture: {moisture}</p>
          </div>
        </div>
        {reason && (
          <p className="mt-2 text-[10px] bg-rose-50 text-rose-600 px-2 py-1 rounded inline-block font-medium">
            Reason: {reason}
          </p>
        )}
      </div>
    </div>
  );
}
