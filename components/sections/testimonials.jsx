"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'রাহুল আহমেদ',
      role: 'সফটওয়্যার ইঞ্জিনিয়ার',
      company: 'TechCorp BD',
      rating: 5,
      text: 'Coursika থেকে ওয়েব ডেভেলপমেন্ট কোর্স করার পর আমি একটি বড় টেক কোম্পানিতে জব পেয়েছি। ইন্সট্রাক্টরদের টিচিং কোয়ালিটি অসাধারণ।',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'ফাতেমা খাতুন',
      role: 'ডিজিটাল মার্কেটার',
      company: 'Creative Agency',
      rating: 5,
      text: 'ডিজিটাল মার্কেটিং কোর্সটি আমার ক্যারিয়ার চেঞ্জ করে দিয়েছে। প্র্যাক্টিক্যাল নলেজ এবং রিয়েল প্রজেক্টের কারণে এখন আমি একজন সফল মার্কেটার।',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'করিম উদ্দিন',
      role: 'গ্রাফিক ডিজাইনার',
      company: 'Freelancer',
      rating: 5,
      text: 'গ্রাফিক ডিজাইন কোর্স করার পর আমি ফ্রিল্যান্সিং শুরু করেছি। এখন মাসে ৫০,০০০+ টাকা ইনকাম করছি। Coursika টিমকে ধন্যবাদ।',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'সালমা বেগম',
      role: 'ডেটা অ্যানালিস্ট',
      company: 'Bank Asia',
      rating: 5,
      text: 'ডেটা সায়েন্স কোর্সটি সম্পূর্ণ করার পর আমি ব্যাংকিং সেক্টরে ডেটা অ্যানালিস্ট হিসেবে কাজ করছি। কোর্স কন্টেন্ট এবং প্রজেক্ট গুলো চমৎকার।',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'নাসির হোসেন',
      role: 'UI/UX ডিজাইনার',
      company: 'StartupXYZ',
      rating: 5,
      text: 'UI/UX ডিজাইন কোর্সের পর আমি একটি স্টার্টআপে লিড ডিজাইনার হিসেবে কাজ করছি। হ্যান্ডস-অন প্রজেক্ট এবং মেন্টরশিপ ছিল অসাধারণ।',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'রুমা আক্তার',
      role: 'কন্টেন্ট রাইটার',
      company: 'Media House',
      rating: 5,
      text: 'কন্টেন্ট রাইটিং এবং SEO কোর্স করার পর আমার রাইটিং স্কিল এবং ইনকাম দুটোই বেড়েছে। এখন আমি একটি মিডিয়া হাউসে সিনিয়র কন্টেন্ট রাইটার।',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            শিক্ষার্থীদের মতামত
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আমাদের কোর্স করে যারা সফল হয়েছেন তাদের গল্প শুনুন
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-red-200 dark:text-red-900">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              আপনিও হতে পারেন সফল
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              আজই যোগ দিন আমাদের সাথে এবং আপনার ক্যারিয়ারে নতুন মাত্রা যোগ করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">৯৮%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">সন্তুষ্ট শিক্ষার্থী</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">৮৫%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">ক্যারিয়ার গ্রোথ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">৭৫%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">স্যালারি ইনক্রিজ</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}