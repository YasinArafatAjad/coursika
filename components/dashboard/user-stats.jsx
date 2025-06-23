"use client";

import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'এনরোল করা কোর্স',
    value: '১২',
    change: '+২ এই মাসে',
    changeType: 'positive',
    icon: BookOpen,
    color: 'bg-blue-500'
  },
  {
    title: 'সম্পন্ন কোর্স',
    value: '৮',
    change: '+৩ এই মাসে',
    changeType: 'positive',
    icon: Award,
    color: 'bg-green-500'
  },
  {
    title: 'মোট ঘন্টা',
    value: '৪৮',
    change: '+১২ এই সপ্তাহে',
    changeType: 'positive',
    icon: Clock,
    color: 'bg-yellow-500'
  },
  {
    title: 'অগ্রগতি',
    value: '৭৫%',
    change: '+১৫% এই মাসে',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'bg-purple-500'
  }
];

export default function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className={`text-sm mt-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </p>
            </div>
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}