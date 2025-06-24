"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import UserSidebar from '@/components/dashboard/user-sidebar';
import UserHeader from '@/components/dashboard/user-header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Star, 
  MessageSquare, 
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const userReviews = [
  {
    id: 1,
    courseName: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    instructor: 'রহিম উদ্দিন',
    rating: 5,
    comment: 'অসাধারণ কোর্স! ইন্সট্রাক্টর খুবই ভালো ভাবে বুঝিয়েছেন। প্র্যাক্টিক্যাল প্রজেক্ট গুলো খুবই কার্যকর ছিল। এই কোর্স করার পর আমি একটি ভালো চাকরি পেয়েছি।',
    date: '২০২৪-০৫-১৫',
    helpful: 12,
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    courseName: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    instructor: 'সালমা খাতুন',
    rating: 4,
    comment: 'ভালো কোর্স। মার্কেটিং এর বেসিক থেকে অ্যাডভান্স সব কিছু শিখতে পেরেছি। তবে আরো কিছু কেস স্টাডি থাকলে ভালো হতো।',
    date: '২০২৪-০৪-২২',
    helpful: 8,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    courseName: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    instructor: 'করিম আহমেদ',
    rating: 5,
    comment: 'চমৎকার কোর্স! ডিজাইনের সব বেসিক থেকে অ্যাডভান্স টেকনিক শিখতে পেরেছি। ইন্সট্রাক্টরের টিচিং স্টাইল অসাধারণ।',
    date: '২০২৪-০৩-১০',
    helpful: 15,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function UserReviews() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [reviews, setReviews] = useState(userReviews);
  const [editingReview, setEditingReview] = useState(null);
  const [editComment, setEditComment] = useState('');
  const [editRating, setEditRating] = useState(5);

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 cursor-pointer ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        onClick={() => interactive && onRatingChange && onRatingChange(i + 1)}
      />
    ));
  };

  const startEditing = (review) => {
    setEditingReview(review.id);
    setEditComment(review.comment);
    setEditRating(review.rating);
  };

  const saveEdit = () => {
    setReviews(reviews.map(review => 
      review.id === editingReview 
        ? { ...review, comment: editComment, rating: editRating }
        : review
    ));
    setEditingReview(null);
  };

  const cancelEdit = () => {
    setEditingReview(null);
    setEditComment('');
    setEditRating(5);
  };

  const deleteReview = (reviewId) => {
    if (confirm('আপনি কি নিশ্চিত যে এই রিভিউটি ডিলিট করতে চান?')) {
      setReviews(reviews.filter(review => review.id !== reviewId));
    }
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
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  আমার রিভিউ
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  আপনার দেওয়া কোর্স রিভিউগুলি দেখুন এবং সম্পাদনা করুন
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="w-4 h-4 mr-2" />
                নতুন রিভিউ
              </Button>
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
                      মোট রিভিউ
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {reviews.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
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
                      গড় রেটিং
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
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
                      সহায়ক ভোট
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {reviews.reduce((sum, review) => sum + review.helpful, 0)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.image}
                        alt={review.courseName}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {review.courseName}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ইন্সট্রাক্টর: {review.instructor}
                        </p>
                        <div className="flex items-center mt-1">
                          {editingReview === review.id ? (
                            <div className="flex items-center">
                              {renderStars(editRating, true, setEditRating)}
                            </div>
                          ) : (
                            <>
                              {renderStars(review.rating)}
                              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                {review.date}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {editingReview !== review.id && (
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => startEditing(review)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700"
                          onClick={() => deleteReview(review.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    {editingReview === review.id ? (
                      <Textarea
                        value={editComment}
                        onChange={(e) => setEditComment(e.target.value)}
                        rows={4}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {review.comment}
                      </p>
                    )}
                  </div>

                  {editingReview === review.id ? (
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={saveEdit}
                      >
                        সেভ করুন
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={cancelEdit}
                      >
                        বাতিল
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {review.helpful} জন এই রিভিউটি সহায়ক মনে করেছেন
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {reviews.length === 0 && (
              <div className="text-center py-16">
                <MessageSquare className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  এখনো কোন রিভিউ নেই
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  কোর্স সম্পন্ন করার পর রিভিউ দিন এবং অন্যদের সাহায্য করুন।
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="w-4 h-4 mr-2" />
                  প্রথম রিভিউ দিন
                </Button>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}