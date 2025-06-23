"use client";

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'সোম', hours: 2.5 },
  { day: 'মঙ্গল', hours: 3.2 },
  { day: 'বুধ', hours: 1.8 },
  { day: 'বৃহ', hours: 4.1 },
  { day: 'শুক্র', hours: 2.9 },
  { day: 'শনি', hours: 5.2 },
  { day: 'রবি', hours: 3.7 },
];

export default function ActivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        সাপ্তাহিক কার্যক্রম
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value} ঘন্টা`, 'অধ্যয়নের সময়']}
            />
            <Area 
              type="monotone" 
              dataKey="hours" 
              stroke="#dc2626" 
              fill="#dc2626"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}