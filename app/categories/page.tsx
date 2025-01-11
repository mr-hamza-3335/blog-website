'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Categories() {
  const categories = [
    { name: "Product Reviews", slug: "product-reviews", description: "In-depth analysis of the latest products" },
    { name: "Buying Guides", slug: "buying-guides", description: "Comprehensive guides to make informed purchases" },
    { name: "E-Commerce Trends", slug: "e-commerce-trends", description: "Stay updated with the latest industry trends" },
    { name: "Tips & Tricks", slug: "tips-and-tricks", description: "Insider knowledge to enhance your online shopping" },
    { name: "Technology", slug: "technology", description: "Explore cutting-edge tech in e-commerce" },
    { name: "Sustainability", slug: "sustainability", description: "Green practices in online retail" },
    { name: "Consumer Behavior", slug: "consumer-behavior", description: "Understanding the psychology of online shoppers" },
    { name: "Mobile Commerce", slug: "mobile-commerce", description: "Strategies for success in m-commerce" },
    { name: "Logistics", slug: "logistics", description: "Innovations in e-commerce supply chain and delivery" },
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
          Categories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/category/${category.slug}`} className="block p-6 h-full hover:bg-gray-800 transition-colors">
                <h2 className="text-xl font-semibold mb-2 text-primary">{category.name}</h2>
                <p className="text-gray-400">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

