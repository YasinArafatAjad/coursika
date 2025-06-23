"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components to avoid SSR issues
const DashboardLayout = dynamic(() => import('@/components/dashboard/dashboard-layout'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
});

const DashboardStats = dynamic(() => import('@/components/dashboard/dashboard-stats'), {
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
});

const RecentCourses = dynamic(() => import('@/components/dashboard/recent-courses'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
});

const LearningProgress = dynamic(() => import('@/components/dashboard/learning-progress'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
});

const QuickActions = dynamic(() => import('@/components/dashboard/quick-actions'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
});

export default function Dashboard() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <DashboardLayout>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              ড্যাশবোর্ড
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              আপনার লার্নিং জার্নির সম্পূর্ণ ওভারভিউ
            </p>
          </div>
          
          <DashboardStats />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <RecentCourses />
              <LearningProgress />
            </div>
            
            <div>
              <QuickActions />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </Suspense>
  );
}