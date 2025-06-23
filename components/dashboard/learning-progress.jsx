"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LearningProgress() {
  const [isClient, setIsClient] = useState(false);
  const [chartComponents, setChartComponents] = useState(null);

  const data = [
    { name: 'জানুয়ারি', hours: 12 },
    { name: 'ফেব্রুয়ারি', hours: 19 },
    { name: 'মার্চ', hours: 15 },
    { name: 'এপ্রিল', hours: 25 },
    { name: 'মে', hours: 22 },
    { name: 'জুন', hours: 30 },
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import recharts only on client side
    const loadCharts = async () => {
      try {
        const recharts = await import('recharts');
        setChartComponents({
          BarChart: recharts.BarChart,
          Bar: recharts.Bar,
          XAxis: recharts.XAxis,
          YAxis: recharts.YAxis,
          CartesianGrid: recharts.CartesianGrid,
          Tooltip: recharts.Tooltip,
          ResponsiveContainer: recharts.ResponsiveContainer,
        });
      } catch (error) {
        console.error('Failed to load charts:', error);
      }
    };

    loadCharts();
  }, []);

  const renderChart = () => {
    if (!isClient || !chartComponents) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500">Loading chart...</div>
        </div>
      );
    }

    const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = chartComponents;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`${value} ঘন্টা`, 'শেখার সময়']}
            labelStyle={{ color: '#374151' }}
          />
          <Bar dataKey="hours" fill="#dc2626" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        শেখার অগ্রগতি
      </h2>

      <div className="h-80">
        {renderChart()}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">১২৩</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">মোট ঘন্টা</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">৮</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">সম্পন্ন কোর্স</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">৪</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">চলমান কোর্স</div>
        </div>
      </div>
    </motion.div>
  );
}