'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { name: 'Global E-Commerce Sales', value: '$8.1 Trillion', icon: DollarSign },
  { name: 'Online Shoppers Worldwide', value: '3.5 Billion', icon: Users },
  { name: 'Cross-Border E-Commerce', value: '27% of Total', icon: Globe },
  { name: 'Mobile Commerce Growth', value: '+18% YoY', icon: TrendingUp },
]

const EcommerceStats = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">E-Commerce in 2025: By the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="bg-black p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2 text-white">{stat.value}</h3>
              <p className="text-gray-400">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EcommerceStats

