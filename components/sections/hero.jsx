"use client";

import { motion } from 'framer-motion';
import { Play, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">বাংলাদেশের #১ অনলাইন লার্নিং প্ল্যাটফর্ম</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">নতুন স্কিল শিখুন,</span>
              <span className="block">
                <span className="text-yellow-400">ভবিষ্যৎ</span> গড়ে তুলুন
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              বিশেষজ্ঞ ইন্সট্রাক্টরদের সাথে হাজারো কোর্স থেকে শিখুন। 
              আপনার ক্যারিয়ারে নতুন মাত্রা যোগ করুন আজই।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/courses">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group">
                  কোর্স দেখুন
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                <Play className="w-5 h-5 mr-2" />
                ডেমো দেখুন
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">৫০০+</div>
                <div className="text-sm text-gray-300">কোর্স</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">১০০K+</div>
                <div className="text-sm text-gray-300">শিক্ষার্থী</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">৯৮%</div>
                <div className="text-sm text-gray-300">সন্তুষ্টি</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500/20 rounded-full blur-xl"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">আজকের পরিসংখ্যান</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-blue-400" />
                        নতুন রেজিস্ট্রেশন
                      </span>
                      <span className="font-bold">১২৪</span>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                        কোর্স সম্পন্ন
                      </span>
                      <span className="font-bold">৮৭</span>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        সার্টিফিকেট প্রদান
                      </span>
                      <span className="font-bold">৪৫</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">৳ ১,২৪,৫৬৭</div>
                      <div className="text-sm opacity-90">আজকের বিক্রয়</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
}