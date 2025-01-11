'use client'

import { useTheme } from "../components/ThemeProvider"
import { motion } from 'framer-motion'

export default function About() {
  const { theme } = useTheme()

  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About E-Commerce Insights</h1>
          <p className="text-xl mb-8">Your trusted source for the latest trends and insights in e-commerce.</p>
        </motion.div>

        <motion.div
          className="prose dark:prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p>E-Commerce Insights was founded in 2023 with a mission to provide valuable information and analysis on the rapidly evolving world of online retail. Our team of experienced writers and industry experts are dedicated to bringing you the most up-to-date and relevant content to help you navigate the e-commerce landscape.</p>
          
          <h2>Our Mission</h2>
          <p>We strive to empower businesses and consumers alike with the knowledge they need to make informed decisions in the digital marketplace. Through in-depth product reviews, comprehensive buying guides, and analysis of emerging trends, we aim to be your go-to resource for all things e-commerce.</p>
          
          <h2>What We Offer</h2>
          <ul>
            <li>Unbiased product reviews</li>
            <li>Comprehensive buying guides</li>
            <li>Analysis of e-commerce trends</li>
            <li>Tips and tricks for online shopping</li>
            <li>Insights into e-commerce technologies</li>
          </ul>
          
          <h2>Our Team</h2>
          <p>Our diverse team of writers, researchers, and industry experts brings a wealth of knowledge and experience to every article we publish. From seasoned e-commerce professionals to tech-savvy millennials, our team is committed to delivering high-quality, actionable content.</p>
          
          <h2>Connect With Us</h2>
          <p>We value our community and always welcome feedback, suggestions, and questions. Don&apos;t hesitate to reach out to us through our contact page or connect with us on social media. Your input helps us improve and provide the content you want to see.</p>
        </motion.div>
      </div>
    </div>
  )
}

