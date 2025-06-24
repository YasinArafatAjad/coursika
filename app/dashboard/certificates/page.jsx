"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import UserSidebar from '@/components/dashboard/user-sidebar';
import UserHeader from '@/components/dashboard/user-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Download, 
  Share2, 
  Calendar,
  Star,
  ExternalLink
} from 'lucide-react';

const certificates = [
  {
    id: 1,
    courseName: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
    instructor: 'রহিম উদ্দিন',
    completionDate: '২০২৪-০৫-১৫',
    grade: 'A+',
    score: 95,
    certificateId: 'CERT-WD-2024-001',
    verificationUrl: 'https://coursika.com/verify/CERT-WD-2024-001',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    courseName: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
    instructor: 'সালমা খাতুন',
    completionDate: '২০২৪-০৪-২২',
    grade: 'A',
    score: 88,
    certificateId: 'CERT-DM-2024-002',
    verificationUrl: 'https://coursika.com/verify/CERT-DM-2024-002',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    courseName: 'গ্রাফিক ডিজাইন প্রো কোর্স',
    instructor: 'করিম আহমেদ',
    completionDate: '২০২৪-০৩-১০',
    grade: 'A+',
    score: 92,
    certificateId: 'CERT-GD-2024-003',
    verificationUrl: 'https://coursika.com/verify/CERT-GD-2024-003',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function Certificates() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getGradeBadge = (grade) => {
    const gradeColors = {
      'A+': 'bg-green-100 text-green-800',
      'A': 'bg-blue-100 text-blue-800',
      'B+': 'bg-yellow-100 text-yellow-800',
      'B': 'bg-orange-100 text-orange-800'
    };
    return (
      <Badge className={gradeColors[grade] || 'bg-gray-100 text-gray-800'}>
        {grade}
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
                আমার সার্টিফিকেট
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                আপনার অর্জিত সার্টিফিকেটগুলি দেখুন এবং ডাউনলোড করুন
              </p>
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
                      মোট সার্টিফিকেট
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {certificates.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
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
                      গড় স্কোর
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {Math.round(certificates.reduce((sum, cert) => sum + cert.score, 0) / certificates.length)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
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
                      সর্বশেষ অর্জন
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {certificates[0]?.completionDate}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={certificate.image}
                      alt={certificate.courseName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      {getGradeBadge(certificate.grade)}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-center">
                          <Award className="w-8 h-8 text-yellow-400 mr-2" />
                          <span className="text-white font-bold">সার্টিফিকেট</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {certificate.courseName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      ইন্সট্রাক্টর: {certificate.instructor}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">সম্পন্নের তারিখ:</span>
                        <span className="font-medium">{certificate.completionDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">স্কোর:</span>
                        <span className="font-medium text-green-600">{certificate.score}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">সার্টিফিকেট ID:</span>
                        <span className="font-mono text-xs">{certificate.certificateId}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Download className="w-4 h-4 mr-2" />
                        ডাউনলোড করুন
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          শেয়ার
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          ভেরিফাই
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {certificates.length === 0 && (
              <div className="text-center py-16">
                <Award className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  এখনো কোন সার্টিফিকেট নেই
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  কোর্স সম্পন্ন করুন এবং আপনার প্রথম সার্টিফিকেট অর্জন করুন।
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