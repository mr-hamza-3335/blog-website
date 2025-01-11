'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BlogCard from './components/BlogCard'
import Newsletter from './components/Newsletter'
import TrendingTech from './components/TrendingTech'
import EcommerceStats from './components/EcommerceStats'

export default function Home() {
  const featuredPosts = [
    { title: "AI-Powered Personal Shopping Assistants", category: "AI", slug: "ai-shopping-assistants", excerpt: "Explore how AI is revolutionizing the online shopping experience with personalized recommendations." },
    { title: "The Rise of Sustainable E-Commerce", category: "Sustainability", slug: "sustainable-ecommerce", excerpt: "Discover how eco-friendly practices are shaping the future of online retail." },
    { title: "Blockchain and the Future of E-Commerce Security", category: "Technology", slug: "blockchain-ecommerce-security", excerpt: "Learn how blockchain is enhancing security and transparency in online transactions." },
    { title: "Virtual Reality Shopping Experiences", category: "VR", slug: "vr-shopping-experiences", excerpt: "Step into the world of immersive online shopping with virtual reality technology." },
    { title: "The Impact of 5G on E-Commerce", category: "Technology", slug: "5g-impact-ecommerce", excerpt: "Understand how 5G is set to transform the speed and capabilities of online shopping." },
    { title: "Voice Commerce: The New Frontier", category: "Technology", slug: "voice-commerce-frontier", excerpt: "Explore the growing trend of voice-activated shopping and its implications for e-commerce." },
  ]

  const categories = [
    { name: "AI & Machine Learning", slug: "ai-ml", description: "The latest in AI-powered e-commerce solutions" },
    { name: "Sustainable Shopping", slug: "sustainable-shopping", description: "Eco-friendly practices in online retail" },
    { name: "Emerging Technologies", slug: "emerging-tech", description: "Cutting-edge tech shaping the future of e-commerce" },
    { name: "Customer Experience", slug: "customer-experience", description: "Innovations in personalized shopping experiences" },
    { name: "Global E-Commerce Trends", slug: "global-trends", description: "Worldwide shifts in online shopping behaviors" },
    { name: "Future of Payments", slug: "future-payments", description: "Next-gen payment solutions and cryptocurrencies" },
  ]

  return (
    <div className="bg-black text-white">
      <motion.section 
        className="text-center py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to E-Commerce Insights 2025</h1>
        <p className="text-xl mb-8">Your portal to the future of online shopping and digital commerce</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/blog" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition-colors">
            Explore the Future of E-Commerce
          </Link>
        </motion.div>
      </motion.section>

      <TrendingTech />

      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-500">Featured Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post,) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-500">E-Commerce Categories of Tomorrow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                className="bg-black rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/category/${category.slug}`} className="block p-6 h-full hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{category.name}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <EcommerceStats />
      <Newsletter />
    </div>
  )
}

