"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/admin-sidebar';
import AdminHeader from '@/components/admin/admin-header';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Eye,
  Download,
  Calendar
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';

const userGrowthData = [
  { month: 'জানুয়ারি', users: 8500, newUsers: 1200 },
  { month: 'ফেব্রুয়ারি', users: 9200, newUsers: 1400 },
  { month: 'মার্চ', users: 9800, newUsers: 1100 },
  { month: 'এপ্রিল', users: 10500, newUsers: 1600 },
  { month: 'মে', users: 11200, newUsers: 1300 },
  { month: 'জুন', users: 12543, newUsers: 1800 },
];

const courseEngagementData = [
  { course: 'ওয়েব ডেভেলপমেন্ট', completion: 85, engagement: 92 },
  { course: 'ডিজিটাল মার্কেটিং', completion: 78, engagement: 88 },
  { course: 'গ্রাফিক ডিজাইন', completion: 82, engagement: 85 },
  { course: 'ডেটা সায়েন্স', completion: 76, engagement: 90 },
  { course: 'UI/UX ডিজাইন', completion: 80, engagement: 87 },
];

const trafficData = [
  { day: 'সোম', visits: 2400, pageViews: 4800 },
  { day: 'মঙ্গল', visits: 2800, pageViews: 5200 },
  { day: 'বুধ', visits: 2200, pageViews: 4400 },
  { day: 'বৃহ', visits: 3200, pageViews: 6100 },
  { day: 'শুক্র', visits: 2900, pageViews: 5500 },
  { day: 'শনি', visits: 3800, pageViews: 7200 },
  { day: 'রবি', visits: 3400, pageViews: 6800 },
];

export default function AdminAnalytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                  অ্যানালিটিক্স
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  প্ল্যাটফর্মের বিস্তারিত পরিসংখ্যান এবং বিশ্লেষণ
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  তারিখ নির্বাচন
                </Button>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Download className="w-4 h-4 mr-2" />
                  রিপোর্ট ডাউনলোড
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      মোট ভিজিটর
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ২৪,৫৬৭
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      +১২% গত মাস থেকে
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
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
                      পেজ ভিউ
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ৪৮,৯২৩
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      +৮% গত মাস থেকে
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
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
                      কোর্স সম্পন্নের হার
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ৮২%
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      +৫% গত মাস থেকে
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      গড় সেশন সময়
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ১৮ মিনিট
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      +৩% গত মাস থেকে
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                  ব্যবহারকারী বৃদ্ধি
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#dc2626" 
                        fill="#dc2626"
                        fillOpacity={0.2}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="newUsers" 
                        stroke="#ea580c" 
                        fill="#ea580c"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                  সাপ্তাহিক ট্রাফিক
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="visits" 
                        stroke="#dc2626" 
                        strokeWidth={3}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="pageViews" 
                        stroke="#ea580c" 
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* Course Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                কোর্স এনগেজমেন্ট
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={courseEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="course" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="completion" fill="#dc2626" name="সম্পন্নের হার" />
                    <Bar dataKey="engagement" fill="#ea580c" name="এনগেজমেন্ট" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}