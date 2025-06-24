"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserSidebar from '@/components/dashboard/user-sidebar';
import UserHeader from '@/components/dashboard/user-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Play, 
  Clock, 
  BookOpen,
  Star,
  Calendar
} from 'lucide-react';

const enrolledCourses = [
  {
    id: 1,
    title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    instructor: 'রহিম উদ্দিন',
    progress: 75,
    totalLessons: 45,
    completedLessons: 34,
    duration: '১২ ঘন্টা',
    enrolledDate: '২০২৪-০১-১৫',
    lastAccessed: '২০২৪-০৬-১৪',
    nextLesson: 'React Hooks',
    category: 'প্রোগ্রামিং',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    instructor: 'সালমা খাতুন',
    progress: 60,
    totalLessons: 32,
    completedLessons: 19,
    duration: '৮ ঘন্টা',
    enrolledDate: '২০২৪-০২-১০',
    lastAccessed: '২০২৪-০৬-১৩',
    nextLesson: 'Social Media Strategy',
    category: 'মার্কেটিং',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    instructor: 'করিম আহমেদ',
    progress: 40,
    totalLessons: 38,
    completedLessons: 15,
    duration: '১৫ ঘন্টা',
    enrolledDate: '২০২৪-০৩-০৫',
    lastAccessed: '২০২৪-০৬-১২',
    nextLesson: 'Color Theory',
    category: 'ডিজাইন',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 4,
    title: 'ডেটা সায়েন্স ফান্ডামেন্টাল',
    instructor: 'নাসির হোসেন',
    progress: 25,
    totalLessons: 52,
    completedLessons: 13,
    duration: '২০ ঘন্টা',
    enrolledDate: '২০২৪-০৪-২০',
    lastAccessed: '২০২৪-০৬-১০',
    nextLesson: 'Data Visualization',
    category: 'ডেটা সায়েন্স',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function UserCourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredCourses = enrolledCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(enrolledCourses.map(course => course.category))];

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
                আমার কোর্স
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                আপনার এনরোল করা সকল কোর্স এবং অগ্রগতি দেখুন
              </p>
            </div>

            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="কোর্স বা ইন্সট্রাক্টর নাম দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex space-x-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={filterCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterCategory(category)}
                    >
                      {category === 'All' ? 'সব' : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge>{course.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {course.progress}% সম্পন্ন
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      ইন্সট্রাক্টর: {course.instructor}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>অগ্রগতি</span>
                          <span>{course.completedLessons}/{course.totalLessons} লেসন</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {course.rating}
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <BookOpen className="w-4 h-4 mr-1" />
                          পরবর্তী: {course.nextLesson}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          শেষ দেখা: {course.lastAccessed}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Play className="w-4 h-4 mr-2" />
                      চালিয়ে যান
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  কোন কোর্স পাওয়া যায়নি
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  আপনার অনুসন্ধান অনুযায়ী কোন কোর্স খুঁজে পাওয়া যায়নি।
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  নতুন কোর্স খুঁজুন
                </Button>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}