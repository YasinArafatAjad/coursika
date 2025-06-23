"use client";

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'জানুয়ারি', revenue: 180000 },
  { month: 'ফেব্রুয়ারি', revenue: 220000 },
  { month: 'মার্চ', revenue: 195000 },
  { month: 'এপ্রিল', revenue: 245000 },
  { month: 'মে', revenue: 267000 },
  { month: 'জুন', revenue: 289000 },
];

export default function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        মাসিক আয়ের চার্ট
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`৳${value.toLocaleString()}`, 'আয়']}
            />
            <Bar dataKey="revenue" fill="#dc2626" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}