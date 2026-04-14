import React from 'react';
import { Send, Search, Phone } from 'lucide-react';

export default function Messages() {
  return (
    <div className="h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)] flex flex-col bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
      {/* Chat Header */}
      <header className="p-4 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
          <div>
            <h3 className="font-bold text-stone-900">Pod Shakti Nagar</h3>
            <p className="text-[10px] text-emerald-600 font-medium">12 members online</p>
          </div>
        </div>
        <button className="p-2 text-stone-500 hover:bg-white rounded-xl transition-colors">
          <Phone size={20} />
        </button>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <MessageBubble 
          sender="Facilitator" 
          content="Good morning everyone! Reminder: Delivery window for Wheat starts tomorrow at 8 AM." 
          time="09:15 AM"
          isMe={false}
        />
        <MessageBubble 
          sender="Ram Singh" 
          content="I will bring 20 qtl by 10 AM. Is the moisture tester calibrated?" 
          time="09:22 AM"
          isMe={false}
        />
        <MessageBubble 
          sender="Buyer (Varanasi Mills)" 
          content="Yes, calibrated this morning. Please ensure moisture is below 14% for Grade A." 
          time="09:45 AM"
          isMe={false}
        />
        <MessageBubble 
          sender="Me" 
          content="I'll be there by noon with 15 qtl. My crop is looking good." 
          time="10:05 AM"
          isMe={true}
        />
      </div>

      {/* Chat Input */}
      <footer className="p-4 border-t border-stone-100">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-stone-100 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none"
          />
          <button className="bg-emerald-600 text-white p-3 rounded-2xl shadow-lg shadow-emerald-100">
            <Send size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

function MessageBubble({ sender, content, time, isMe }: any) {
  return (
    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
      {!isMe && <span className="text-[10px] font-bold text-stone-400 mb-1 ml-1 uppercase tracking-wider">{sender}</span>}
      <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
        isMe 
          ? 'bg-emerald-600 text-white rounded-tr-none' 
          : 'bg-stone-100 text-stone-800 rounded-tl-none'
      }`}>
        {content}
      </div>
      <span className="text-[9px] text-stone-400 mt-1 px-1">{time}</span>
    </div>
  );
}
