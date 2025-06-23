"use client";

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'জানুয়ারি', users: 8500 },
  { month: 'ফেব্রুয়ারি', users: 9200 },
  { month: 'মার্চ', users: 9800 },
  { month: 'এপ্রিল', users: 10500 },
  { month: 'মে', users: 11200 },
  { month: 'জুন', users: 12543 },
];

export default function UserGrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        ব্যবহারকারী বৃদ্ধির চার্ট
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value.toLocaleString()} জন`, 'ব্যবহারকারী']}
            />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#dc2626" 
              strokeWidth={3}
              dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}