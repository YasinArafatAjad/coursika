"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/admin-sidebar';
import AdminHeader from '@/components/admin/admin-header';
import DashboardStats from '@/components/admin/dashboard-stats';
import RevenueChart from '@/components/admin/revenue-chart';
import UserGrowthChart from '@/components/admin/user-growth-chart';
import RecentActivities from '@/components/admin/recent-activities';
import TopCourses from '@/components/admin/top-courses';

export default function AdminDashboard() {
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                অ্যাডমিন ড্যাশবোর্ড
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                আপনার প্ল্যাটফর্মের সম্পূর্ণ ওভারভিউ দেখুন
              </p>
            </div>

            {/* Stats Cards */}
            <DashboardStats />

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <RevenueChart />
              <UserGrowthChart />
            </div>

            {/* Recent Activities and Top Courses */}
            <div className="grid lg:grid-cols-2 gap-6">
              <RecentActivities />
              <TopCourses />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}