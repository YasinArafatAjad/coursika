"use client";

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Download, 
  MessageCircle,
  Smartphone,
  Shield
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'লাইফটাইম এক্সেস',
      description: 'একবার কিনলে চিরতরে আপনার। আপডেট এবং নতুন কন্টেন্ট ফ্রি।'
    },
    {
      icon: Users,
      title: 'এক্সপার্ট ইন্সট্রাক্টর',
      description: 'ইন্ডাস্ট্রি এক্সপার্ট এবং অভিজ্ঞ শিক্ষকদের কাছ থেকে শিখুন।'
    },
    {
      icon: Award,
      title: 'সার্টিফিকেট',
      description: 'কোর্স সম্পন্ন করার পর পেয়ে যান ভেরিফাইড সার্টিফিকেট।'
    },
    {
      icon: Clock,
      title: 'ফ্লেক্সিবল টাইমিং',
      description: 'আপনার সুবিধামত সময়ে শিখুন। কোন সময়সীমা নেই।'
    },
    {
      icon: Download,
      title: 'অফলাইন ডাউনলোড',
      description: 'ভিডিও ডাউনলোড করে অফলাইনেও শিখতে পারেন।'
    },
    {
      icon: MessageCircle,
      title: '২৪/৭ সাপোর্ট',
      description: 'যেকোন সমস্যায় আমাদের এক্সপার্ট টিম আছে সাহায্যের জন্য।'
    },
    {
      icon: Smartphone,
      title: 'মোবাইল অ্যাপ',
      description: 'Android এবং iOS অ্যাপে যেকোন জায়গায় শিখুন।'
    },
    {
      icon: Shield,
      title: 'মানি ব্যাক গ্যারান্টি',
      description: '৩০ দিনের মানি ব্যাক গ্যারান্টি। সন্তুষ্ট না হলে টাকা ফেরত।'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            কেন Coursika বেছে নিবেন?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আমাদের প্ল্যাটফর্মের বিশেষ সুবিধাগুলি দেখুন যা আপনার লার্নিং এক্সপেরিয়েন্স করবে আরও সহজ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4 group-hover:shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}