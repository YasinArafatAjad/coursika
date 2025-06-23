"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import UserSidebar from '@/components/dashboard/user-sidebar';
import UserHeader from '@/components/dashboard/user-header';
import UserStats from '@/components/dashboard/user-stats';
import LearningProgress from '@/components/dashboard/learning-progress';
import EnrolledCourses from '@/components/dashboard/enrolled-courses';
import RecommendedCourses from '@/components/dashboard/recommended-courses';
import ActivityChart from '@/components/dashboard/activity-chart';

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                আমার ড্যাশবোর্ড
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                আপনার লার্নিং জার্নি ট্র্যাক করুন
              </p>
            </div>

            {/* User Stats */}
            <UserStats />

            {/* Learning Progress and Activity Chart */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <LearningProgress />
              <ActivityChart />
            </div>

            {/* Enrolled Courses and Recommendations */}
            <div className="grid lg:grid-cols-2 gap-6">
              <EnrolledCourses />
              <RecommendedCourses />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}