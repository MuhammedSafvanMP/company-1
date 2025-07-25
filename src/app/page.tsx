"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Play, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FloatingNav from "@/components/floating-nav"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <FloatingNav />
      <WhatsAppButton />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        {/* Enhanced Floating Orbs - More visible and dynamic */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${200 + i * 30}px`,
              height: `${200 + i * 30}px`,
              background: `linear-gradient(45deg, ${
                i % 4 === 0 ? "#3B82F6" : i % 4 === 1 ? "#8B5CF6" : i % 4 === 2 ? "#EC4899" : "#10B981"
              }, ${i % 4 === 0 ? "#1D4ED8" : i % 4 === 1 ? "#7C3AED" : i % 4 === 2 ? "#BE185D" : "#059669"})`,
              left: `${5 + i * 8}%`,
              top: `${5 + i * 7}%`,
              opacity: 0.4,
            }}
            animate={{
              x: [0, 150, -100, 0],
              y: [0, -120, 80, 0],
              scale: [1, 1.3, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Interactive Mouse Follower - Enhanced */}
        <motion.div
          className="absolute pointer-events-none z-10"
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl" />
            <div className="absolute inset-0 w-12 h-12 bg-white/20 rounded-full blur-sm top-6 left-6" />
            <div className="absolute inset-0 w-6 h-6 bg-white/40 rounded-full top-9 left-9" />
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div style={{ y, opacity, scale }} className="text-center max-w-6xl mx-auto">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl mb-8 relative">
              <Sparkles className="w-16 h-16 text-white" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Main Title with Stagger Animation */}
          <div className="mb-12">
            {["MISHAJ", "ADVERTISING"].map((word, wordIndex) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + wordIndex * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`text-7xl md:text-9xl lg:text-[12rem] font-black leading-none ${
                    wordIndex === 0
                      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-16"
          >
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Transforming brands with cutting-edge design solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              {["Neon", "LED", "Steel", "Glass", "Print"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-400 border border-white/20"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Explore Our Work
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent px-10 py-6 rounded-2xl text-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Start Project
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-3 gap-12 max-w-3xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.7 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator - Centered */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center cursor-pointer relative overflow-hidden backdrop-blur-sm"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-3"
          />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 border-2 border-blue-400/50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.p
          className="text-white/60 text-sm mt-4 text-center font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Scroll to explore
        </motion.p>

        {/* Animated arrow */}
        <motion.div
          className="mt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/40">
            <path
              d="M7 13l3 3 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M7 6l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Brief Overview Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Where Innovation Meets{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Artistry
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              With over 15 years of experience in the Middle East, we've mastered the art of transforming brands through
              cutting-edge advertising solutions. From vibrant neon installations to sophisticated LED displays, every
              project reflects our commitment to excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Neon Artistry", desc: "Custom illuminated experiences" },
                { title: "LED Innovation", desc: "Smart digital solutions" },
                { title: "Premium Materials", desc: "Steel, brass & glass mastery" },
                { title: "Creative Design", desc: "Unique brand expressions" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
