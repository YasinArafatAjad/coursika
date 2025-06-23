import DashboardLayout from '@/components/dashboard/dashboard-layout';
import DashboardStats from '@/components/dashboard/dashboard-stats';
import RecentCourses from '@/components/dashboard/recent-courses';
import LearningProgress from '@/components/dashboard/learning-progress';
import QuickActions from '@/components/dashboard/quick-actions';

export const metadata = {
  title: 'ড্যাশবোর্ড',
};

export default function Dashboard() {
  return (
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
  );
}