"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import UserSidebar from '@/components/dashboard/user-sidebar';
import UserHeader from '@/components/dashboard/user-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Star, 
  Users, 
  Clock,
  ShoppingCart,
  Trash2,
  Play
} from 'lucide-react';

const wishlistCourses = [
  {
    id: 1,
    title: 'React Native মোবাইল অ্যাপ ডেভেলপমেন্ট',
    instructor: 'তানভীর আহমেদ',
    price: 4999,
    originalPrice: 7999,
    rating: 4.8,
    students: 567,
    duration: '১৮ ঘন্টা',
    level: 'মধ্যম',
    category: 'প্রোগ্রামিং',
    addedDate: '২০২৪-০৬-১০',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'UI/UX ডিজাইন মাস্টারক্লাস',
    instructor: 'রুমানা আক্তার',
    price: 3999,
    originalPrice: 5999,
    rating: 4.9,
    students: 423,
    duration: '১৫ ঘন্টা',
    level: 'শুরুর লেভেল',
    category: 'ডিজাইন',
    addedDate: '২০২৪-০৬-০৮',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'পাইথন প্রোগ্রামিং বেসিক টু অ্যাডভান্স',
    instructor: 'মাহবুব হাসান',
    price: 5999,
    originalPrice: 8999,
    rating: 4.7,
    students: 789,
    duration: '২২ ঘন্টা',
    level: 'উন্নত',
    category: 'প্রোগ্রামিং',
    addedDate: '২০২৪-০৬-০৫',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 4,
    title: 'ব্লকচেইন এবং ক্রিপ্টোকারেন্সি',
    instructor: 'সাকিব হাসান',
    price: 6999,
    originalPrice: 9999,
    rating: 4.6,
    students: 234,
    duration: '২০ ঘন্টা',
    level: 'উন্নত',
    category: 'প্রযুক্তি',
    addedDate: '২০২৪-০৬-০৩',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function Wishlist() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courses, setCourses] = useState(wishlistCourses);

  const removeFromWishlist = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  const addToCart = (courseId) => {
    // Add to cart logic here
    console.log('Added to cart:', courseId);
  };

  const getLevelBadge = (level) => {
    const levelColors = {
      'শুরুর লেভেল': 'bg-green-100 text-green-800',
      'মধ্যম': 'bg-yellow-100 text-yellow-800',
      'উন্নত': 'bg-red-100 text-red-800'
    };
    return (
      <Badge className={levelColors[level] || 'bg-gray-100 text-gray-800'}>
        {level}
      </Badge>
    );
  };

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
                পছন্দের তালিকা
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                আপনার পছন্দের কোর্সগুলি সংরক্ষণ করুন এবং পরে এনরোল করুন
              </p>
            </div>

            {/* Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      {courses.length} টি কোর্স পছন্দের তালিকায়
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      মোট মূল্য: ৳{courses.reduce((sum, course) => sum + course.price, 0).toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  সব কার্টে যোগ করুন
                </Button>
              </div>
            </div>

            {/* Wishlist Courses */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
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
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromWishlist(course.id)}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                      >
                        <Heart className="w-4 h-4 fill-current text-red-500" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      {getLevelBadge(course.level)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      ইন্সট্রাক্টর: {course.instructor}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({course.students})</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-red-600">
                          ৳{course.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ৳{course.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        যোগ করা: {course.addedDate}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => addToCart(course.id)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        কার্টে যোগ করুন
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4 mr-1" />
                          প্রিভিউ
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeFromWishlist(course.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          সরান
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {courses.length === 0 && (
              <div className="text-center py-16">
                <Heart className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  পছন্দের তালিকা খালি
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  আপনার পছন্দের কোর্সগুলি এখানে সংরক্ষণ করুন।
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