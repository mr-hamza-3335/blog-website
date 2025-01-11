'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">About Us</h3>
            <p className="text-sm">E-Commerce Insights: Your go-to source for the latest trends and tips in online shopping.</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary-light transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-primary-light transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary-light transition-colors">Terms & Conditions</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/product-reviews" className="text-sm hover:text-primary-light transition-colors">Product Reviews</Link></li>
              <li><Link href="/category/buying-guides" className="text-sm hover:text-primary-light transition-colors">Buying Guides</Link></li>
              <li><Link href="/category/e-commerce-trends" className="text-sm hover:text-primary-light transition-colors">E-Commerce Trends</Link></li>
              <li><Link href="/category/tips-and-tricks" className="text-sm hover:text-primary-light transition-colors">Tips & Tricks</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-primary hover:text-primary-light transition-colors"><Facebook /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-primary hover:text-primary-light transition-colors"><Twitter /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-primary hover:text-primary-light transition-colors"><Instagram /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-primary hover:text-primary-light transition-colors"><Linkedin /></motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm">&copy; 2025 E-Commerce Insights. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer

