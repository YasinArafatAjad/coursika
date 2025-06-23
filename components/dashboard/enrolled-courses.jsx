"use client";

import { motion } from 'framer-motion';
import { Play, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const courses = [
  {
    id: 1,
    title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    instructor: 'রহিম উদ্দিন',
    progress: 75,
    nextLesson: 'React Hooks',
    duration: '৪৫ মিনিট',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    instructor: 'সালমা খাতুন',
    progress: 60,
    nextLesson: 'Social Media Strategy',
    duration: '৩৫ মিনিট',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    instructor: 'করিম আহমেদ',
    progress: 40,
    nextLesson: 'Color Theory',
    duration: '৫০ মিনিট',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export default function EnrolledCourses() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        চলমান কোর্স
      </h3>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {course.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  ইন্সট্রাক্টর: {course.instructor}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      অগ্রগতি: {course.progress}%
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        পরবর্তী: {course.nextLesson}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                <Play className="w-4 h-4 mr-2" />
                চালিয়ে যান
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}