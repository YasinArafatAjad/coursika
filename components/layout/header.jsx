"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  User,
  Sun,
  Moon,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'কোর্স', href: '/courses' },
    { name: 'ক্যাটাগরি', href: '/categories' },
    { name: 'ইনস্ট্রাক্টর', href: '/instructors' },
    { name: 'সম্পর্কে', href: '/about' },
    { name: 'যোগাযোগ', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl lg:text-2xl font-bold transition-colors ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white'
              }`}>
                Coursika
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-red-400 ${
                  isScrolled
                    ? 'text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
                    : 'text-zinc-200 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className={isScrolled ? '' : 'text-zinc-200 hover:text-white hover:bg-white/10'}
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={isScrolled ? '' : 'text-zinc-200 hover:text-white hover:bg-white/10'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Link href="/cart">
              <Button 
                variant="ghost" 
                size="sm"
                className={isScrolled ? '' : 'text-zinc-200 hover:text-white hover:bg-white/10'}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="ml-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/login">
              <Button 
                variant="outline" 
                size="sm"
                className={isScrolled 
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                  : 'border-zinc-200 text-zinc-200 hover:bg-white/10 hover:text-white'
                }
              >
                <LogIn className="w-4 h-4 mr-2" />
                লগইন
              </Button>
            </Link>
            <Link href="/profile">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                <User className="w-4 h-4 mr-2" />
                প্রোফাইল
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden ${isScrolled ? '' : 'text-zinc-200 hover:text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${
              isScrolled 
                ? 'border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95' 
                : 'border-zinc-200/20 bg-black/20 backdrop-blur-md'
            }`}
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block transition-colors ${
                    isScrolled
                      ? 'text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
                      : 'text-zinc-200 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`flex items-center space-x-4 pt-4 border-t ${
                isScrolled ? 'border-gray-200 dark:border-gray-700' : 'border-zinc-200/20'
              }`}>
                <Link href="/login" className="flex-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`w-full ${
                      isScrolled 
                        ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                        : 'border-zinc-200 text-zinc-200 hover:bg-white/10 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    লগইন
                  </Button>
                </Link>
                <Link href="/profile" className="flex-1">
                  <Button 
                    size="sm" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    প্রোফাইল
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}