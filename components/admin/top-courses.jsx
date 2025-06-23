"use client";

import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    instructor: 'রহিম উদ্দিন',
    students: 1234,
    rating: 4.8,
    revenue: '৳৪,৮৫,৬৭৮',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    instructor: 'সালমা খাতুন',
    students: 892,
    rating: 4.9,
    revenue: '৳২,৬৭,৪০৮',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    instructor: 'করিম আহমেদ',
    students: 567,
    rating: 4.7,
    revenue: '৳২,৫৪,৯৯৯',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 4,
    title: 'ডেটা সায়েন্স ফান্ডামেন্টাল',
    instructor: 'নাসির হোসেন',
    students: 734,
    rating: 4.6,
    revenue: '৪,৪০,২৬৬',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function TopCourses() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        জনপ্রিয় কোর্স
      </h3>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {course.title}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {course.instructor}
              </p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {course.students}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {course.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-green-600">
                {course.revenue}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}