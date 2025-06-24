"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/admin-sidebar';
import AdminHeader from '@/components/admin/admin-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  FileText, 
  Calendar,
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  BarChart3
} from 'lucide-react';

const reportTypes = [
  {
    id: 1,
    title: 'ব্যবহারকারী রিপোর্ট',
    description: 'নতুন রেজিস্ট্রেশন, সক্রিয় ব্যবহারকারী এবং ব্যবহারকারীর কার্যক্রম',
    icon: Users,
    color: 'bg-blue-500',
    lastGenerated: '২০২৪-০৬-১৫',
    frequency: 'সাপ্তাহিক'
  },
  {
    id: 2,
    title: 'কোর্স পারফরমেন্স রিপোর্ট',
    description: 'কোর্স এনরোলমেন্ট, সম্পন্নের হার এবং রেটিং বিশ্লেষণ',
    icon: BookOpen,
    color: 'bg-green-500',
    lastGenerated: '২০২৪-০৬-১৪',
    frequency: 'মাসিক'
  },
  {
    id: 3,
    title: 'আয় রিপোর্ট',
    description: 'বিক্রয়, আয় এবং আর্থিক পরিসংখ্যান',
    icon: DollarSign,
    color: 'bg-yellow-500',
    lastGenerated: '২০২৪-০৬-১৩',
    frequency: 'মাসিক'
  },
  {
    id: 4,
    title: 'ট্রাফিক অ্যানালিটিক্স',
    description: 'ওয়েবসাইট ভিজিট, পেজ ভিউ এবং ব্যবহারকারীর আচরণ',
    icon: BarChart3,
    color: 'bg-purple-500',
    lastGenerated: '২০২৪-০৬-১২',
    frequency: 'দৈনিক'
  }
];

const recentReports = [
  {
    id: 1,
    name: 'জুন ২০২৪ - মাসিক আয় রিপোর্ট',
    type: 'আয়',
    generatedDate: '২০২৪-০৬-১৫',
    size: '২.৩ MB',
    status: 'Ready'
  },
  {
    id: 2,
    name: 'সাপ্তাহিক ব্যবহারকারী কার্যক্রম',
    type: 'ব্যবহারকারী',
    generatedDate: '২০২৪-০৬-১৪',
    size: '১.৮ MB',
    status: 'Ready'
  },
  {
    id: 3,
    name: 'কোর্স পারফরমেন্স - Q2 ২০২৪',
    type: 'কোর্স',
    generatedDate: '২০২৪-০৬-১৩',
    size: '৩.১ MB',
    status: 'Processing'
  },
  {
    id: 4,
    name: 'ট্রাফিক অ্যানালিটিক্স - জুন',
    type: 'ট্রাফিক',
    generatedDate: '২০২৪-০৬-১২',
    size: '১.৫ MB',
    status: 'Ready'
  }
];

export default function AdminReports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Ready':
        return <Badge className="bg-green-100 text-green-800">প্রস্তুত</Badge>;
      case 'Processing':
        return <Badge className="bg-yellow-100 text-yellow-800">প্রক্রিয়াধীন</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

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
                  রিপোর্ট ব্যবস্থাপনা
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  বিভিন্ন ধরনের রিপোর্ট তৈরি এবং ডাউনলোড করুন
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <Calendar className="w-4 h-4 mr-2" />
                কাস্টম রিপোর্ট
              </Button>
            </div>

            {/* Report Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {reportTypes.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${report.color} rounded-lg flex items-center justify-center`}>
                      <report.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {report.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {report.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">শেষ তৈরি:</span>
                      <span className="text-gray-900 dark:text-white">{report.lastGenerated}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">ফ্রিকোয়েন্সি:</span>
                      <span className="text-gray-900 dark:text-white">{report.frequency}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Download className="w-4 h-4 mr-2" />
                    রিপোর্ট তৈরি করুন
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Recent Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  সাম্প্রতিক রিপোর্ট
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        রিপোর্ট নাম
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        ধরন
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        তৈরির তারিখ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        সাইজ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        স্ট্যাটাস
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        অ্যাকশন
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {recentReports.map((report, index) => (
                      <motion.tr
                        key={report.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileText className="w-5 h-5 text-gray-400 mr-3" />
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {report.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {report.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {report.generatedDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {report.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(report.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {report.status === 'Ready' ? (
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-1" />
                              ডাউনলোড
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" disabled>
                              প্রক্রিয়াধীন...
                            </Button>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}