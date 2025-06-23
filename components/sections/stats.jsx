"use client";

import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: BookOpen,
      value: '৫০০+',
      label: 'কোর্স',
      description: 'বিভিন্ন বিষয়ে'
    },
    {
      icon: Users,
      value: '১,০০,০০০+',
      label: 'শিক্ষার্থী',
      description: 'সারা বিশ্বে'
    },
    {
      icon: Award,
      value: '৯৮%',
      label: 'সন্তুষ্টি',
      description: 'রেটিং'
    },
    {
      icon: Globe,
      value: '২৫+',
      label: 'দেশ',
      description: 'এ আমাদের শিক্ষার্থী'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-4 mx-auto"
              >
                <stat.icon className="w-8 h-8 text-red-600" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-semibold text-red-600 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}