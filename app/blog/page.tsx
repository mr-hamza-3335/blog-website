'use client'

import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'
import Newsletter from '../components/Newsletter'

export default function Blog() {
  const blogPosts = [
    { title: "Top 10 E-Commerce Trends for 2025", category: "Trends", slug: "top-10-ecommerce-trends-2025", excerpt: "Discover the cutting-edge trends shaping the future of online retail." },
    { title: "The Ultimate Guide to AI-Powered Shopping", category: "Guides", slug: "ai-powered-shopping-guide", excerpt: "Learn how AI is revolutionizing the online shopping experience." },
    { title: "How Blockchain is Revolutionizing E-Commerce", category: "Technology", slug: "blockchain-in-ecommerce", excerpt: "Explore the impact of blockchain technology on online transactions and supply chains." },
    { title: "The Rise of Voice Commerce", category: "Trends", slug: "rise-of-voice-commerce", excerpt: "Understand how voice-activated shopping is changing consumer behavior." },
    { title: "Sustainable E-Commerce: A New Era", category: "Sustainability", slug: "sustainable-ecommerce", excerpt: "Discover eco-friendly practices in online retail and their impact on consumer choices." },
    { title: "Augmented Reality in Online Shopping", category: "Technology", slug: "ar-in-online-shopping", excerpt: "See how AR is bridging the gap between online and in-store shopping experiences." },
    { title: "The Psychology of Online Shopping", category: "Consumer Behavior", slug: "psychology-of-online-shopping", excerpt: "Delve into the mental processes that influence online purchasing decisions." },
    { title: "Mastering Mobile Commerce in 2025", category: "Mobile", slug: "mastering-mobile-commerce-2025", excerpt: "Learn strategies to optimize your e-commerce for the mobile-first world." },
    { title: "The Future of Last-Mile Delivery", category: "Logistics", slug: "future-of-last-mile-delivery", excerpt: "Explore innovative solutions for the final step of the e-commerce supply chain." },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post,) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

