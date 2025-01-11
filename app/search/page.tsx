'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'

// This would typically come from an API or database
const allPosts = [
  { title: "AI-Powered Personal Shopping Assistants", category: "AI", slug: "ai-shopping-assistants", excerpt: "Explore how AI is revolutionizing the online shopping experience with personalized recommendations." },
  { title: "The Rise of Sustainable E-Commerce", category: "Sustainability", slug: "sustainable-ecommerce", excerpt: "Discover how eco-friendly practices are shaping the future of online retail." },
  { title: "Blockchain and the Future of E-Commerce Security", category: "Technology", slug: "blockchain-ecommerce-security", excerpt: "Learn how blockchain is enhancing security and transparency in online transactions." },
  { title: "Virtual Reality Shopping Experiences", category: "VR", slug: "vr-shopping-experiences", excerpt: "Step into the world of immersive online shopping with virtual reality technology." },
  { title: "The Impact of 5G on E-Commerce", category: "Technology", slug: "5g-impact-ecommerce", excerpt: "Understand how 5G is set to transform the speed and capabilities of online shopping." },
  { title: "Voice Commerce: The New Frontier", category: "Technology", slug: "voice-commerce-frontier", excerpt: "Explore the growing trend of voice-activated shopping and its implications for e-commerce." },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState<typeof allPosts>([])

  useEffect(() => {
    if (query) {
      const filteredPosts = allPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredPosts)
    }
  }, [query])

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Search Results for &quot;{query}&quot;
        </motion.h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-400">No results found for your search query.</p>
        )}
      </div>
    </div>
  )
}

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
