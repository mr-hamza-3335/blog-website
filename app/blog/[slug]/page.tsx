'use client'
import { motion } from 'framer-motion'

export default function BlogPost() {

  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "Sample Blog Post",
    content: `
      <p>This is a sample blog post content. In a real application, this would be fetched from a database or CMS based on the slug.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.</p>
      <h2>Section 1</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
      <h2>Section 2</h2>
      <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
      <h2>Conclusion</h2>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
    `,
    date: "June 1, 2025",
    author: "John Doe"
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            {post.title}
          </motion.h1>
          <motion.div 
            className="text-gray-400 mb-6"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span>{post.date}</span> • <span>{post.author}</span>
          </motion.div>
          <motion.div 
            className="prose prose-invert max-w-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </div>
    </div>
  )
}

