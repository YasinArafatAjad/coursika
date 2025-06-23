"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, Phone, MapPin, Camera, Save } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'জন ডো',
    email: 'john@example.com',
    phone: '+880 1700-000000',
    address: 'ঢাকা, বাংলাদেশ',
    bio: 'আমি একজন ওয়েব ডেভেলপার এবং প্রোগ্রামিং শিখতে ভালোবাসি।',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-12">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full border-4 border-white object-cover"
                    />
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
                        <Camera className="w-4 h-4 text-gray-600" />
                      </button>
                    )}
                  </div>
                  <div className="text-white">
                    <h1 className="text-3xl font-bold">{profile.name}</h1>
                    <p className="text-red-100">{profile.email}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    প্রোফাইল তথ্য
                  </h2>
                  <Button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        সেভ করুন
                      </>
                    ) : (
                      'এডিট করুন'
                    )}
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="flex items-center mb-2">
                        <User className="w-4 h-4 mr-2" />
                        নাম
                      </Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        ইমেইল
                      </Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        ফোন
                      </Label>
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.phone}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="address" className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        ঠিকানা
                      </Label>
                      {isEditing ? (
                        <Input
                          id="address"
                          value={profile.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.address}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio" className="mb-2 block">
                      বায়ো
                    </Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        rows={6}
                        value={profile.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        placeholder="আপনার সম্পর্কে লিখুন..."
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white leading-relaxed">
                        {profile.bio}
                      </p>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    পরিসংখ্যান
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">১২</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">এনরোল করা কোর্স</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">৮</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">সম্পন্ন কোর্স</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">৪৮</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">মোট ঘন্টা</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">৫</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">সার্টিফিকেট</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}