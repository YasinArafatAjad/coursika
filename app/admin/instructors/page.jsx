"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/admin-sidebar';
import AdminHeader from '@/components/admin/admin-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Star, 
  BookOpen, 
  Users,
  Mail,
  Phone,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: 'রহিম উদ্দিন',
    email: 'rahim@example.com',
    phone: '+880 1700-000001',
    expertise: 'ওয়েব ডেভেলপমেন্ট',
    courses: 8,
    students: 2456,
    rating: 4.8,
    status: 'Active',
    joinDate: '২০২৩-০৬-১৫',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'সালমা খাতুন',
    email: 'salma@example.com',
    phone: '+880 1700-000002',
    expertise: 'ডিজিটাল মার্কেটিং',
    courses: 12,
    students: 3421,
    rating: 4.9,
    status: 'Active',
    joinDate: '২০২৩-০৪-১০',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'করিম আহমেদ',
    email: 'karim@example.com',
    phone: '+880 1700-000003',
    expertise: 'গ্রাফিক ডিজাইন',
    courses: 6,
    students: 1876,
    rating: 4.7,
    status: 'Pending',
    joinDate: '২০২৪-০১-২০',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function AdminInstructors() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  ইন্সট্রাক্টর ব্যবস্থাপনা
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  সকল ইন্সট্রাক্টরদের তথ্য এবং কার্যক্রম পরিচালনা করুন
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <UserPlus className="w-4 h-4 mr-2" />
                নতুন ইন্সট্রাক্টর
              </Button>
            </div>

            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="নাম বা দক্ষতা দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  ফিল্টার
                </Button>
              </div>
            </div>

            {/* Instructors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInstructors.map((instructor, index) => (
                <motion.div
                  key={instructor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {instructor.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {instructor.expertise}
                      </p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{instructor.rating}</span>
                      </div>
                    </div>
                    <Badge variant={instructor.status === 'Active' ? 'default' : 'secondary'}>
                      {instructor.status === 'Active' ? 'সক্রিয়' : 'অপেক্ষমাণ'}
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Mail className="w-4 h-4 mr-2" />
                      {instructor.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Phone className="w-4 h-4 mr-2" />
                      {instructor.phone}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <BookOpen className="w-4 h-4 text-red-600 mr-1" />
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {instructor.courses}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">কোর্স</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-red-600 mr-1" />
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {instructor.students.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">শিক্ষার্থী</div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                    যোগদান: {instructor.joinDate}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}