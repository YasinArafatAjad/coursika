"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
      instructor: 'রহিম উদ্দিন',
      price: 3999,
      originalPrice: 5999,
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300',
      quantity: 1
    },
    {
      id: 2,
      title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
      instructor: 'সালমা খাতুন',
      price: 2999,
      originalPrice: 4999,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300',
      quantity: 1
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - total;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              শপিং কার্ট
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  আপনার কার্ট খালি
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  কোর্স যোগ করুন এবং শেখা শুরু করুন
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  কোর্স ব্রাউজ করুন
                </Button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              ইন্সট্রাক্টর: {item.instructor}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-lg font-bold text-red-600">
                                ৳{item.price.toLocaleString()}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                ৳{item.originalPrice.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24"
                  >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      অর্ডার সামারি
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">সাবটোটাল:</span>
                        <span className="font-medium">৳{originalTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>ছাড়:</span>
                        <span>-৳{savings.toLocaleString()}</span>
                      </div>
                      <hr className="border-gray-200 dark:border-gray-700" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>মোট:</span>
                        <span className="text-red-600">৳{total.toLocaleString()}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                      চেকআউট করুন
                    </Button>

                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ৩০ দিনের মানি ব্যাক গ্যারান্টি
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}