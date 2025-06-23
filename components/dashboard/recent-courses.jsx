"use client";

import { motion } from 'framer-motion';
import { Play, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function RecentCourses() {
  const courses = [
    {
      id: 1,
      title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
      instructor: 'রহিম উদ্দিন',
      progress: 65,
      lastWatched: '২ দিন আগে',
      duration: '১২ ঘন্টা',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
      instructor: 'সালমা খাতুন',
      progress: 80,
      lastWatched: '১ দিন আগে',
      duration: '৮ ঘন্টা',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
      instructor: 'করিম আহমেদ',
      progress: 45,
      lastWatched: '৩ দিন আগে',
      duration: '১৫ ঘন্টা',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          সাম্প্রতিক কোর্স
        </h2>
        <Button variant="outline" size="sm">
          সব দেখুন
        </Button>
      </div>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {course.instructor}
              </p>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {course.progress}% সম্পন্ন
                </span>
                <span className="text-xs text-gray-500">
                  {course.lastWatched}
                </span>
              </div>
              
              <Progress value={course.progress} className="h-2" />
            </div>

            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                {course.duration}
              </div>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                <Play className="w-4 h-4 mr-1" />
                চালিয়ে যান
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}