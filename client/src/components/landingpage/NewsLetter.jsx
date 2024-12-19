import { ArrowRight } from 'lucide-react'
import React from 'react'  

export default function NewsLetter() {
  return (
    <div className="backdrop-blur-lg bg-gradient-to-r from-[#ab54db]/10 to-[#fe6b68]/10 rounded-xl p-8 md:p-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Subscribe to Our Newsletter
    </h2>
    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
      Stay updated with our latest products, exclusive offers, and shopping tips!
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow px-6 py-3 rounded-lg backdrop-blur-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#ab54db]"
      />
      <button className="px-8 py-3 bg-[#ab54db] text-white rounded-lg hover:bg-[#d894ff] transition-colors flex items-center justify-center">
        Subscribe <ArrowRight className="ml-2" />
      </button>
    </div>
  </div>
  )
}
