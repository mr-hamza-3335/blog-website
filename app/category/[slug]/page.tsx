'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Category() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

  // If slug is undefined, we'll show a default message
  const categoryName = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Category Not Found'

  const category = {
    name: categoryName,
    description: slug
      ? `Explore our collection of articles related to ${categoryName}.`
      : 'Sorry, we couldn\'t find the category you\'re looking for.'
  }

  const posts = [
    { title: "AI-Powered Personal Shopping Assistants", excerpt: "Explore how AI is revolutionizing the online shopping experience with personalized recommendations.", slug: "ai-shopping-assistants" },
    { title: "The Rise of Sustainable E-Commerce", excerpt: "Discover how eco-friendly practices are shaping the future of online retail.", slug: "sustainable-ecommerce" },
    { title: "Blockchain and the Future of E-Commerce Security", excerpt: "Learn how blockchain is enhancing security and transparency in online transactions.", slug: "blockchain-ecommerce-security" },
    { title: "Virtual Reality Shopping Experiences", excerpt: "Step into the world of immersive online shopping with virtual reality technology.", slug: "vr-shopping-experiences" },
    { title: "The Impact of 5G on E-Commerce", excerpt: "Understand how 5G is set to transform the speed and capabilities of online shopping.", slug: "5g-impact-ecommerce" },
    { title: "Voice Commerce: The New Frontier", excerpt: "Explore the growing trend of voice-activated shopping and its implications for e-commerce.", slug: "voice-commerce-frontier" },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">{category.name}</h1>
          <p className="text-xl mb-8 text-gray-400">{category.description}</p>
        </motion.div>

        {slug ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block p-6 hover:bg-gray-800 transition-colors">
                  <h2 className="text-xl font-semibold mb-2 text-blue-400">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <span className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl mb-4">We couldn&apos;t find the category you&apos;re looking for.</p>
            <Link href="/categories" className="text-blue-500 hover:text-blue-400 transition-colors">
              View all categories
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

