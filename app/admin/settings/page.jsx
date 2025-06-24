"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/admin-sidebar';
import AdminHeader from '@/components/admin/admin-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  Settings as SettingsIcon, 
  Save, 
  Globe, 
  Mail, 
  Shield,
  Bell,
  Palette,
  Database
} from 'lucide-react';

export default function AdminSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settings, setSettings] = useState({
    siteName: 'Coursika',
    siteDescription: 'বাংলাদেশের সবচেয়ে বড় অনলাইন লার্নিং প্ল্যাটফর্ম',
    contactEmail: 'support@coursika.com',
    allowRegistration: true,
    requireEmailVerification: true,
    enableNotifications: true,
    maintenanceMode: false,
    maxFileSize: '10',
    sessionTimeout: '30'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Here you would save to backend
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
                  সিস্টেম সেটিংস
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  প্ল্যাটফর্মের সাধারণ সেটিংস পরিচালনা করুন
                </p>
              </div>
              <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
                <Save className="w-4 h-4 mr-2" />
                সেটিংস সেভ করুন
              </Button>
            </div>

            <div className="space-y-8">
              {/* General Settings */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    সাধারণ সেটিংস
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium mb-2 block">সাইটের নাম</Label>
                    <Input
                      value={settings.siteName}
                      onChange={(e) => handleSettingChange('siteName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">যোগাযোগের ইমেইল</Label>
                    <Input
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => handleSettingChange('contactEmail', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label className="text-base font-medium mb-2 block">সাইটের বিবরণ</Label>
                    <Textarea
                      rows={3}
                      value={settings.siteDescription}
                      onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>

              {/* User Management */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    ব্যবহারকারী ব্যবস্থাপনা
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">নতুন রেজিস্ট্রেশন অনুমতি</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        নতুন ব্যবহারকারীদের রেজিস্ট্রেশনের অনুমতি দিন
                      </p>
                    </div>
                    <Switch
                      checked={settings.allowRegistration}
                      onCheckedChange={(checked) => handleSettingChange('allowRegistration', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">ইমেইল ভেরিফিকেশন প্রয়োজন</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        রেজিস্ট্রেশনের সময় ইমেইল ভেরিফিকেশন বাধ্যতামূলক করুন
                      </p>
                    </div>
                    <Switch
                      checked={settings.requireEmailVerification}
                      onCheckedChange={(checked) => handleSettingChange('requireEmailVerification', checked)}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Notifications */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Bell className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    নোটিফিকেশন সেটিংস
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">নোটিফিকেশন সক্রিয় করুন</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        সিস্টেম নোটিফিকেশন সক্রিয় রাখুন
                      </p>
                    </div>
                    <Switch
                      checked={settings.enableNotifications}
                      onCheckedChange={(checked) => handleSettingChange('enableNotifications', checked)}
                    />
                  </div>
                </div>
              </motion.div>

              {/* System Settings */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    সিস্টেম সেটিংস
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium mb-2 block">
                      সর্বোচ্চ ফাইল সাইজ (MB)
                    </Label>
                    <Input
                      type="number"
                      value={settings.maxFileSize}
                      onChange={(e) => handleSettingChange('maxFileSize', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">
                      সেশন টাইমআউট (মিনিট)
                    </Label>
                    <Input
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">মেইনটেনেন্স মোড</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        সাইট মেইনটেনেন্স মোডে রাখুন
                      </p>
                    </div>
                    <Switch
                      checked={settings.maintenanceMode}
                      onCheckedChange={(checked) => handleSettingChange('maintenanceMode', checked)}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Email Settings */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <Mail className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    ইমেইল সেটিংস
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium mb-2 block">SMTP হোস্ট</Label>
                    <Input placeholder="smtp.gmail.com" />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">SMTP পোর্ট</Label>
                    <Input placeholder="587" />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">SMTP ইউজারনেম</Label>
                    <Input placeholder="your-email@gmail.com" />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">SMTP পাসওয়ার্ড</Label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}