"use client";

import { motion } from 'framer-motion';
import { Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 1,
    title: 'React Native মোবাইল অ্যাপ ডেভেলপমেন্ট',
    instructor: 'তানভীর আহমেদ',
    rating: 4.8,
    students: 567,
    duration: '১৮ ঘন্টা',
    price: '৳৪,৯৯৯',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    title: 'UI/UX ডিজাইন মাস্টারক্লাস',
    instructor: 'রুমানা আক্তার',
    rating: 4.9,
    students: 423,
    duration: '১৫ ঘন্টা',
    price: '৳৩,৯৯৯',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    title: 'পাইথন প্রোগ্রামিং বেসিক টু অ্যাডভান্স',
    instructor: 'মাহবুব হাসান',
    rating: 4.7,
    students: 789,
    duration: '২২ ঘন্টা',
    price: '৳৫,৯৯৯',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export default function RecommendedCourses() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        আপনার জন্য সুপারিশকৃত
      </h3>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
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
                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {course.students}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {course.duration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button size="sm" variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                কোর্স দেখুন
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}