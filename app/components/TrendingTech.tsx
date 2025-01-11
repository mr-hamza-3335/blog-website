'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, ShoppingBag, Globe } from 'lucide-react'

const technologies = [
  { name: 'Quantum Computing in E-Commerce', icon: Cpu, description: 'Revolutionizing inventory management and logistics optimization' },
  { name: 'Neural Shopping Interfaces', icon: Zap, description: 'Direct brain-to-store connections for seamless shopping experiences' },
  { name: 'Holographic Product Displays', icon: ShoppingBag, description: 'Examine products in 3D from the comfort of your home' },
  { name: 'Global Drone Delivery Network', icon: Globe, description: 'Ultra-fast, autonomous delivery to any location on Earth' },
]

const TrendingTech = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">Trending Technologies in 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-black p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <tech.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingTech

