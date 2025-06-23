"use client";

import { motion } from 'framer-motion';
import { Mail, Send, Gift, Bell, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/90 to-red-700/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Gift className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-medium">বিশেষ অফার এবং আপডেট</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              নিউজলেটার সাবস্ক্রাইব করুন
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              নতুন কোর্স, বিশেষ ছাড় এবং লার্নিং টিপস সবার আগে জানুন
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="আপনার ইমেইল এড্রেস"
                  className="pl-10 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Bell className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">নতুন কোর্স আপডেট</h3>
              <p className="text-gray-300">নতুন কোর্স লঞ্চের খবর সবার আগে পান</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Gift className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">এক্সক্লুসিভ অফার</h3>
              <p className="text-gray-300">বিশেষ ছাড় এবং সাবস্ক্রাইবার অফার</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">লার্নিং টিপস</h3>
              <p className="text-gray-300">দক্ষতা বৃদ্ধির জন্য কার্যকর টিপস</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-300">
              ইতিমধ্যে <span className="font-bold text-yellow-400">২৫,০০০+</span> জন আমাদের নিউজলেটার সাবস্ক্রাইব করেছেন
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}