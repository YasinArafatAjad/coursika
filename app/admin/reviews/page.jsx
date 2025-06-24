"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/admin-sidebar';
import AdminHeader from '@/components/admin/admin-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Star, 
  Eye,
  Trash2,
  MessageSquare,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const reviews = [
  {
    id: 1,
    course: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    student: 'রহিম উদ্দিন',
    rating: 5,
    comment: 'অসাধারণ কোর্স! ইন্সট্রাক্টর খুবই ভালো ভাবে বুঝিয়েছেন। প্র্যাক্টিক্যাল প্রজেক্ট গুলো খুবই কার্যকর ছিল।',
    date: '২০২ৄ-০৬-১৫',
    status: 'Approved',
    helpful: 12,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50'
  },
  {
    id: 2,
    course: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    student: 'সালমা খাতুন',
    rating: 4,
    comment: 'ভালো কোর্স। তবে আরো কিছু উদাহরণ থাকলে ভালো হতো। সামগ্রিকভাবে সন্তুষ্ট।',
    date: '২০২৪-০৬-১৪',
    status: 'Pending',
    helpful: 8,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50'
  },
  {
    id: 3,
    course: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    student: 'করিম আহমেদ',
    rating: 5,
    comment: 'চমৎকার কোর্স! ডিজাইনের সব বেসিক থেকে অ্যাডভান্স টেকনিক শিখতে পেরেছি।',
    date: '২০২৪-০৬-১৩',
    status: 'Approved',
    helpful: 15,
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50'
  },
  {
    id: 4,
    course: 'ডেটা সায়েন্স ফান্ডামেন্টাল',
    student: 'নাসির হোসেন',
    rating: 3,
    comment: 'কোর্সটি ভালো কিন্তু কিছু অংশ আরো বিস্তারিত হলে ভালো হতো।',
    date: '২০২৪-০৬-১২',
    status: 'Rejected',
    helpful: 3,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50'
  }
];

export default function AdminReviews() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || review.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-green-100 text-green-800">অনুমোদিত</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800">অপেক্ষমাণ</Badge>;
      case 'Rejected':
        return <Badge className="bg-red-100 text-red-800">প্রত্যাখ্যাত</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:flex">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  রিভিউ ব্যবস্থাপনা
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  সকল কোর্স রিভিউ পরিচালনা এবং মডারেট করুন
                </p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="কোর্স বা শিক্ষার্থী নাম দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant={filterStatus === 'All' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('All')}
                  >
                    সব
                  </Button>
                  <Button 
                    variant={filterStatus === 'Pending' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('Pending')}
                  >
                    অপেক্ষমাণ
                  </Button>
                  <Button 
                    variant={filterStatus === 'Approved' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('Approved')}
                  >
                    অনুমোদিত
                  </Button>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.student}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {review.student}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {review.course}
                        </p>
                        <div className="flex items-center mt-1">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(review.status)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {review.helpful} জন সহায়ক মনে করেছেন
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {review.status === 'Pending' && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            অনুমোদন
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                            <ThumbsDown className="w-4 h-4 mr-1" />
                            প্রত্যাখ্যান
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-16">
                <MessageSquare className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  কোন রিভিউ পাওয়া যায়নি
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  আপনার অনুসন্ধান অনুযায়ী কোন রিভিউ খুঁজে পাওয়া যায়নি।
                </p>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}