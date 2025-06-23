"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    কোর্স: [
      { name: 'ওয়েব ডেভেলপমেন্ট', href: '/courses/web-development' },
      { name: 'ডিজিটাল মার্কেটিং', href: '/courses/digital-marketing' },
      { name: 'গ্রাফিক ডিজাইন', href: '/courses/graphic-design' },
      { name: 'ডেটা সায়েন্স', href: '/courses/data-science' },
    ],
    সাপোর্ট: [
      { name: 'হেল্প সেন্টার', href: '/help' },
      { name: 'যোগাযোগ', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'কমিউনিটি', href: '/community' },
    ],
    কোম্পানি: [
      { name: 'আমাদের সম্পর্কে', href: '/about' },
      { name: 'ক্যারিয়ার', href: '/careers' },
      { name: 'প্রেস', href: '/press' },
      { name: 'পার্টনারশিপ', href: '/partnership' },
    ],
    আইনি: [
      { name: 'প্রাইভেসি পলিসি', href: '/privacy' },
      { name: 'টার্মস অফ সার্ভিস', href: '/terms' },
      { name: 'কুকি পলিসি', href: '/cookies' },
      { name: 'রিফান্ড পলিসি', href: '/refund' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Coursika</span>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                বাংলাদেশের সবচেয়ে বড় অনলাইন লার্নিং প্ল্যাটফর্ম। আমাদের লক্ষ্য প্রতিটি মানুষের কাছে গুণগত শিক্ষা পৌঁছে দেওয়া।
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-400">support@coursika.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-400">+880 1700-000000</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-400">ঢাকা, বাংলাদেশ</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 lg:mb-0">
              <p>&copy; 2024 Coursika. সমস্ত অধিকার সংরক্ষিত।</p>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}