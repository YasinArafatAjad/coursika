"use client";

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    progress: 75,
    totalLessons: 45,
    completedLessons: 34,
    timeSpent: '২৮ ঘন্টা',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    progress: 60,
    totalLessons: 32,
    completedLessons: 19,
    timeSpent: '১৫ ঘন্টা',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    progress: 40,
    totalLessons: 38,
    completedLessons: 15,
    timeSpent: '১২ ঘন্টা',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function LearningProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        লার্নিং প্রোগ্রেস
      </h3>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <img
                src={course.image}
                alt={course.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {course.title}
                </p>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {course.completedLessons}/{course.totalLessons} লেসন
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {course.timeSpent}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-red-600">
                  {course.progress}%
                </span>
              </div>
            </div>
            <Progress value={course.progress} className="h-2" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}