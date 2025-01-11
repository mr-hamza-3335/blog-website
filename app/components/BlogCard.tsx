'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  category: string
  slug: string
  excerpt: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, category, slug, excerpt }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`} className="block p-6 h-full hover:bg-gray-800 transition-colors">
        <p className="text-sm text-primary mb-2">{category}</p>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <span className="text-primary hover:text-blue-400 transition-colors inline-flex items-center">
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  )
}

export default BlogCard

