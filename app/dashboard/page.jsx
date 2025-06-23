"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Loading components
const LoadingCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-pulse">
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
    </div>
  </div>
);

const LoadingStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <LoadingCard key={i} />
    ))}
  </div>
);

// Dynamically import components with better error handling
const DashboardLayout = dynamic(() => import('@/components/dashboard/dashboard-layout'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        <div className="text-gray-600 dark:text-gray-400">Loading Dashboard...</div>
      </div>
    </div>
  )
});

const DashboardStats = dynamic(() => import('@/components/dashboard/dashboard-stats'), {
  ssr: false,
  loading: () => <LoadingStats />
});

const RecentCourses = dynamic(() => import('@/components/dashboard/recent-courses'), {
  ssr: false,
  loading: () => <LoadingCard />
});

const LearningProgress = dynamic(() => import('@/components/dashboard/learning-progress'), {
  ssr: false,
  loading: () => <LoadingCard />
});

const QuickActions = dynamic(() => import('@/components/dashboard/quick-actions'), {
  ssr: false,
  loading: () => <LoadingCard />
});

export default function Dashboard() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <div className="text-gray-600 dark:text-gray-400">Loading Dashboard...</div>
        </div>
      </div>
    }>
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