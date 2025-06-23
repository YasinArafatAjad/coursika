"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  DollarSign, 
  BarChart3, 
  Settings, 
  MessageSquare,
  FileText,
  UserCheck,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', href: '/admin' },
  { icon: Users, label: 'ব্যবহারকারী', href: '/admin/users' },
  { icon: BookOpen, label: 'কোর্স', href: '/admin/courses' },
  { icon: UserCheck, label: 'ইন্সট্রাক্টর', href: '/admin/instructors' },
  { icon: DollarSign, label: 'আয়', href: '/admin/revenue' },
  { icon: BarChart3, label: 'অ্যানালিটিক্স', href: '/admin/analytics' },
  { icon: MessageSquare, label: 'রিভিউ', href: '/admin/reviews' },
  { icon: FileText, label: 'রিপোর্ট', href: '/admin/reports' },
  { icon: Settings, label: 'সেটিংস', href: '/admin/settings' },
];

export default function AdminSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 lg:translate-x-0 lg:static lg:z-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Admin
            </span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}