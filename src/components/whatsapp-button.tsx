"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsApp = () => {
    const message = "Hi Mishaj! I'm interested in your advertising services. Can we discuss my project?"
    window.open(`https://wa.me/971XXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsApp}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <motion.div
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        Chat with us on WhatsApp
      </motion.div>

      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full -z-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  )
}
