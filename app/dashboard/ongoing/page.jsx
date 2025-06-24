"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserSidebar from '@/components/dashboard/user-sidebar';
import UserHeader from '@/components/dashboard/user-header';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Clock, 
  BookOpen,
  CheckCircle,
  Calendar,
  Target
} from 'lucide-react';

const ongoingCourses = [
  {
    id: 1,
    title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    instructor: 'রহিম উদ্দিন',
    progress: 75,
    totalLessons: 45,
    completedLessons: 34,
    currentLesson: 'React Hooks এর ব্যবহার',
    nextLesson: 'State Management with Redux',
    timeSpent: '২৮ ঘন্টা',
    estimatedCompletion: '৫ দিন',
    lastAccessed: '২০২৪-০৬-১৪',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    instructor: 'সালমা খাতুন',
    progress: 60,
    totalLessons: 32,
    completedLessons: 19,
    currentLesson: 'Social Media Marketing Strategy',
    nextLesson: 'Content Marketing Fundamentals',
    timeSpent: '১৫ ঘন্টা',
    estimatedCompletion: '৮ দিন',
    lastAccessed: '২০২৪-০৬-১৩',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    instructor: 'করিম আহমেদ',
    progress: 40,
    totalLessons: 38,
    completedLessons: 15,
    currentLesson: 'Color Theory and Psychology',
    nextLesson: 'Typography Fundamentals',
    timeSpent: '১২ ঘন্টা',
    estimatedCompletion: '১৫ দিন',
    lastAccessed: '২০২৪-০৬-১২',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function OngoingCourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:flex">
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <UserHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                চলমান কোর্স
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                আপনার বর্তমানে চলমান কোর্সগুলি এবং তাদের অগ্রগতি দেখুন
              </p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      চলমান কোর্স
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {ongoingCourses.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      গড় অগ্রগতি
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {Math.round(ongoingCourses.reduce((sum, course) => sum + course.progress, 0) / ongoingCourses.length)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      মোট সময়
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ৫৫ ঘন্টা
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ongoing Courses */}
            <div className="space-y-6">
              {ongoingCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            ইন্সট্রাক্টর: {course.instructor}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 lg:max-w-md">
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">অগ্রগতি</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                              <span>{course.completedLessons}/{course.totalLessons} লেসন</span>
                              <span>{course.timeSpent} ব্যয়িত</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Play className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            বর্তমান লেসন
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.currentLesson}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <BookOpen className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            পরবর্তী লেসন
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.nextLesson}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Target className="w-4 h-4 text-purple-600 mr-2" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            সম্পন্ন হবে
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.estimatedCompletion}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-4 h-4 text-orange-600 mr-2" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            শেষ দেখা
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.lastAccessed}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-3">
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Play className="w-4 h-4 mr-2" />
                        চালিয়ে যান
                      </Button>
                      <Button variant="outline">
                        <BookOpen className="w-4 h-4 mr-2" />
                        কোর্স ওভারভিউ
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {ongoingCourses.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  কোন চলমান কোর্স নেই
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  নতুন কোর্সে এনরোল করুন এবং আপনার লার্নিং জার্নি শুরু করুন।
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  কোর্স ব্রাউজ করুন
                </Button>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}