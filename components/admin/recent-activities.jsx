"use client";

import { motion } from 'framer-motion';
import { UserPlus, BookOpen, DollarSign, MessageSquare } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'user',
    icon: UserPlus,
    title: 'নতুন ব্যবহারকারী রেজিস্ট্রেশন',
    description: 'রহিম উদ্দিন নতুন অ্যাকাউন্ট তৈরি করেছেন',
    time: '৫ মিনিট আগে',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'course',
    icon: BookOpen,
    title: 'নতুন কোর্স এনরোলমেন্ট',
    description: 'সালমা খাতুন "ওয়েব ডেভেলপমেন্ট" কোর্সে ভর্তি হয়েছেন',
    time: '১৫ মিনিট আগে',
    color: 'bg-green-500'
  },
  {
    id: 3,
    type: 'payment',
    icon: DollarSign,
    title: 'পেমেন্ট সম্পন্ন',
    description: 'করিম আহমেদ ৳৩,৯৯৯ পেমেন্ট করেছেন',
    time: '৩০ মিনিট আগে',
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    type: 'review',
    icon: MessageSquare,
    title: 'নতুন রিভিউ',
    description: 'নাসির হোসেন ৫ স্টার রিভিউ দিয়েছেন',
    time: '১ ঘন্টা আগে',
    color: 'bg-purple-500'
  }
];

export default function RecentActivities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        সাম্প্রতিক কার্যক্রম
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <activity.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}