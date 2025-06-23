"use client";

import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, Award, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuickActions() {
  const actions = [
    {
      icon: Search,
      label: 'নতুন কোর্স খুঁজুন',
      description: 'আপনার পছন্দের কোর্স খুঁজে নিন',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      label: 'কোর্স ব্রাউজ করুন',
      description: 'সব ক্যাটাগরির কোর্স দেখুন',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      label: 'সাপোর্ট চ্যাট',
      description: 'সাহায্যের জন্য যোগাযোগ করুন',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      label: 'সার্টিফিকেট',
      description: 'আপনার অর্জিত সার্টিফিকেট দেখুন',
      color: 'bg-yellow-500'
    },
    {
      icon: Settings,
      label: 'সেটিংস',
      description: 'অ্যাকাউন্ট সেটিংস পরিবর্তন করুন',
      color: 'bg-gray-500'
    },
    {
      icon: HelpCircle,
      label: 'সাহায্য',
      description: 'FAQ এবং গাইড দেখুন',
      color: 'bg-red-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        দ্রুত অ্যাকশন
      </h2>

      <div className="space-y-3">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">
                {action.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {action.description}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            আজকের লক্ষ্য
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            ওয়েব ডেভেলপমেন্ট কোর্সের ৩টি লেকচার শেষ করুন
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">২/৩ সম্পন্ন</span>
            <span className="text-sm font-medium text-red-600">৬৭%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
            <div className="bg-red-600 h-2 rounded-full" style={{ width: '67%' }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}