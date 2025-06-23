"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, 
  Menu, 
  X, 
  Home, 
  User, 
  Settings, 
  LogOut,
  Sun,
  Moon,
  BarChart3,
  GraduationCap,
  ShoppingCart,
  MessageCircle,
  Bell,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const sidebarItems = [
    { icon: Home, label: 'ড্যাশবোর্ড', href: '/dashboard', active: true },
    { icon: GraduationCap, label: 'আমার কোর্স', href: '/dashboard/courses' },
    { icon: BarChart3, label: 'প্রগ্রেস', href: '/dashboard/progress' },
    { icon: Award, label: 'সার্টিফিকেট', href: '/dashboard/certificates' },
    { icon: ShoppingCart, label: 'পারচেজ হিস্টরি', href: '/dashboard/purchases' },
    { icon: MessageCircle, label: 'মেসেজ', href: '/dashboard/messages' },
    { icon: User, label: 'প্রোফাইল', href: '/dashboard/profile' },
    { icon: Settings, label: 'সেটিংস', href: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isSidebarOpen ? 0 : -280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 z-50 h-full w-70 bg-white dark:bg-gray-800 shadow-xl lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-200 dark:lg:border-gray-700"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Coursika
              </span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">থিম</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <LogOut className="w-5 h-5 mr-3" />
              লগআউট
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="lg:ml-70">
        {/* Top header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-red-600" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    জন ডো
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    john@example.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}