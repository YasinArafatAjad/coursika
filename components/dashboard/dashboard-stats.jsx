"use client";

import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';

export default function DashboardStats() {
  const stats = [
    {
      icon: BookOpen,
      label: 'এনরোল করা কোর্স',
      value: '১২',
      change: '+২ এই মাসে',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      label: 'মোট শেখার সময়',
      value: '৪৮ ঘন্টা',
      change: '+৮ ঘন্টা এই সপ্তাহে',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      label: 'সম্পন্ন কোর্স',
      value: '৮',
      change: '+৩ এই মাসে',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      label: 'গড় প্রগ্রেস',
      value: '৭৫%',
      change: '+১০% বৃদ্ধি',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="mb-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
          
          <div className="text-xs text-green-600 dark:text-green-400">
            {stat.change}
          </div>
        </motion.div>
      ))}
    </div>
  );
}