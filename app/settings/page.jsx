"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun,
  Save,
  Trash2
} from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    courseReminders: true,
    marketingEmails: false,
    language: 'bn',
    timezone: 'Asia/Dhaka',
    autoplay: true,
    subtitles: true
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Save settings to backend
    console.log('Settings saved:', settings);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
    if (confirm('আপনি কি নিশ্চিত যে আপনি আপনার অ্যাকাউন্ট ডিলিট করতে চান?')) {
      console.log('Account deletion requested');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <SettingsIcon className="w-8 h-8 text-red-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                সেটিংস
              </h1>
            </div>

            <div className="space-y-8">
              {/* Notifications */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Bell className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    নোটিফিকেশন
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">ইমেইল নোটিফিকেশন</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        কোর্স আপডেট এবং গুরুত্বপূর্ণ তথ্য পান
                      </p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">পুশ নোটিফিকেশন</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ব্রাউজার নোটিফিকেশন পান
                      </p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">কোর্স রিমাইন্ডার</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        কোর্স চালিয়ে যাওয়ার জন্য রিমাইন্ডার পান
                      </p>
                    </div>
                    <Switch
                      checked={settings.courseReminders}
                      onCheckedChange={(checked) => handleSettingChange('courseReminders', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">মার্কেটিং ইমেইল</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        নতুন কোর্স এবং অফার সম্পর্কে জানুন
                      </p>
                    </div>
                    <Switch
                      checked={settings.marketingEmails}
                      onCheckedChange={(checked) => handleSettingChange('marketingEmails', checked)}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Appearance */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  {theme === 'dark' ? (
                    <Moon className="w-6 h-6 text-red-600 mr-3" />
                  ) : (
                    <Sun className="w-6 h-6 text-red-600 mr-3" />
                  )}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    চেহারা
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium mb-2 block">থিম</Label>
                    <Select value={theme} onValueChange={setTheme}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">লাইট</SelectItem>
                        <SelectItem value="dark">ডার্ক</SelectItem>
                        <SelectItem value="system">সিস্টেম</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>

              {/* Language & Region */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    ভাষা ও অঞ্চল
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium mb-2 block">ভাষা</Label>
                    <Select value={settings.language} onValueChange={(value) => handleSettingChange('language', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bn">বাংলা</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-2 block">টাইমজোন</Label>
                    <Select value={settings.timezone} onValueChange={(value) => handleSettingChange('timezone', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Dhaka">ঢাকা (GMT+6)</SelectItem>
                        <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>

              {/* Video Preferences */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  ভিডিও প্রেফারেন্স
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">অটোপ্লে</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        পরবর্তী ভিডিও স্বয়ংক্রিয়ভাবে চালু করুন
                      </p>
                    </div>
                    <Switch
                      checked={settings.autoplay}
                      onCheckedChange={(checked) => handleSettingChange('autoplay', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">সাবটাইটেল</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ডিফল্টভাবে সাবটাইটেল দেখান
                      </p>
                    </div>
                    <Switch
                      checked={settings.subtitles}
                      onCheckedChange={(checked) => handleSettingChange('subtitles', checked)}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Account Security */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    অ্যাকাউন্ট নিরাপত্তা
                  </h2>
                </div>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    পাসওয়ার্ড পরিবর্তন করুন
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    টু-ফ্যাক্টর অথেন্টিকেশন সেটআপ করুন
                  </Button>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="destructive"
                      onClick={handleDeleteAccount}
                      className="w-full justify-start"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      অ্যাকাউন্ট ডিলিট করুন
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      এই অ্যাকশনটি পূর্বাবস্থায় ফেরানো যাবে না
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Save Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex justify-end"
              >
                <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
                  <Save className="w-4 h-4 mr-2" />
                  সেটিংস সেভ করুন
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}