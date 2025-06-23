"use client";

import { motion } from 'framer-motion';
import { Star, Clock, Users, Play, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
      instructor: 'রহিম উদ্দিন',
      price: '৩,৯৯৯',
      originalPrice: '৫,৯৯৯',
      rating: 4.8,
      students: 1234,
      duration: '১২ ঘন্টা',
      lessons: 45,
      level: 'শুরুর লেভেল',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'প্রোগ্রামিং',
      featured: true
    },
    {
      id: 2,
      title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
      instructor: 'সালমা খাতুন',
      price: '২,৯৯৯',
      originalPrice: '৪,৯৯৯',
      rating: 4.9,
      students: 892,
      duration: '৮ ঘন্টা',
      lessons: 32,
      level: 'মধ্যম লেভেল',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'মার্কেটিং',
      featured: true
    },
    {
      id: 3,
      title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
      instructor: 'করিম আহমেদ',
      price: '৪,৪৯৯',
      originalPrice: '৬,৯৯৯',
      rating: 4.7,
      students: 567,
      duration: '১৫ ঘন্টা',
      lessons: 38,
      level: 'উন্নত লেভেল',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'ডিজাইন',
      featured: true
    },
    {
      id: 4,
      title: 'ডেটা সায়েন্স ফান্ডামেন্টাল',
      instructor: 'নাসির হোসেন',
      price: '৫,৯৯৯',
      originalPrice: '৮,৯৯৯',
      rating: 4.6,
      students: 734,
      duration: '২০ ঘন্টা',
      lessons: 52,
      level: 'উন্নত লেভেল',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'ডেটা সায়েন্স',
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            জনপ্রিয় কোর্সগুলি
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আমাদের সবচেয়ে জনপ্রিয় এবং উচ্চ রেটিং প্রাপ্ত কোর্সগুলি দেখুন
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">
                  {course.category}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  ইন্সট্রাক্টর: {course.instructor}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    {course.lessons}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{course.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({course.students})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600">
                      ৳{course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ৳{course.originalPrice}
                    </span>
                  </div>
                </div>

                <Link href={`/courses/${course.id}`}>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                    কোর্স দেখুন
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/courses">
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              সব কোর্স দেখুন
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}