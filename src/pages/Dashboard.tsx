import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { cn } from '@/src/lib/utils';

const mockScoreHistory = [
  { date: 'Mar 20', score: 65 },
  { date: 'Mar 25', score: 68 },
  { date: 'Apr 01', score: 72 },
  { date: 'Apr 05', score: 78 },
  { date: 'Apr 10', score: 82 },
  { date: 'Apr 13', score: 85 },
];

export default function Dashboard() {
  const currentScore = 85;
  const scoreColor = currentScore >= 80 ? 'text-emerald-600' : currentScore >= 60 ? 'text-amber-600' : 'text-rose-600';
  const scoreBg = currentScore >= 80 ? 'bg-emerald-50' : currentScore >= 60 ? 'bg-amber-50' : 'bg-rose-50';

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-stone-900">Pod Shakti Nagar</h2>
        <p className="text-stone-500">Village: Mirzapur, District: Varanasi</p>
      </header>

      {/* Score Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("p-6 rounded-3xl border border-stone-200 shadow-sm", scoreBg)}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-stone-600 uppercase tracking-wider">Group Reliability Score</p>
            <div className="flex items-baseline gap-2">
              <span className={cn("text-5xl font-black", scoreColor)}>{currentScore}</span>
              <span className="text-stone-400 font-medium">/ 100</span>
            </div>
          </div>
          <div className={cn("p-3 rounded-2xl bg-white shadow-sm", scoreColor)}>
            <TrendingUp size={24} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <ScoreComponent label="Delivery" value={92} color="emerald" />
          <ScoreComponent label="Quality" value={88} color="emerald" />
          <ScoreComponent label="Repayment" value={75} color="amber" />
        </div>
      </motion.div>

      {/* Reward Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5 rounded-2xl text-white flex items-center justify-between shadow-lg shadow-emerald-100">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2 rounded-xl">
            <Award size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-emerald-100 uppercase tracking-wider">Next Reward Tier</p>
            <p className="font-semibold">Unlock +₹25/qtl Bonus</p>
            <p className="text-xs text-emerald-50 opacity-80">Maintain 80+ score for 7 more days</p>
          </div>
        </div>
        <ChevronRight size={20} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Score Trend */}
        <section className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Score Trend</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockScoreHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#a8a29e' }}
                  dy={10}
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#059669" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#059669', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Recent Notifications */}
        <section className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Recent Updates</h3>
            <button className="text-sm text-emerald-600 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <NotificationItem 
              icon={<CheckCircle2 className="text-emerald-500" size={18} />}
              title="Delivery Accepted"
              time="2h ago"
              message="20 qtl Wheat accepted at Grade A quality."
            />
            <NotificationItem 
              icon={<Award className="text-amber-500" size={18} />}
              title="New Reward Unlocked"
              time="1d ago"
              message="Your pod has unlocked Priority Pickup service."
            />
            <NotificationItem 
              icon={<AlertCircle className="text-rose-500" size={18} />}
              title="Quality Alert"
              time="3d ago"
              message="Batch #452 had high moisture (15%)."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function ScoreComponent({ label, value, color }: { label: string; value: number; color: 'emerald' | 'amber' | 'rose' }) {
  const colorClass = color === 'emerald' ? 'bg-emerald-500' : color === 'amber' ? 'bg-amber-500' : 'bg-rose-500';
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">{label}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-stone-200 rounded-full overflow-hidden">
          <div className={cn("h-full rounded-full", colorClass)} style={{ width: `${value}%` }} />
        </div>
        <span className="text-xs font-bold text-stone-700">{value}%</span>
      </div>
    </div>
  );
}

function NotificationItem({ icon, title, time, message }: { icon: React.ReactNode; title: string; time: string; message: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <h4 className="text-sm font-bold text-stone-900">{title}</h4>
          <span className="text-[10px] text-stone-400">{time}</span>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
