"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Play, ArrowRight } from "lucide-react"
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${200 + i * 20}px`,
              height: `${200 + i * 20}px`,
              background: `linear-gradient(45deg, ${
                i % 2 === 0 ? "#06b6d4" : "#10b981"
              }, transparent)`,
              left: `${5 + i * 7}%`,
              top: `${5 + i * 5}%`,
              opacity: 0.3,
            }}
            animate={{
              x: [0, 150, -100, 0],
              y: [0, -120, 80, 0],
              scale: [1, 1.3, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Mouse Follower */}
        <motion.div
          className="absolute pointer-events-none z-10"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
        >
          <div className="relative">
            <div className="w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl" />
            <div className="absolute inset-0 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm top-6 left-6" />
          </div>
        </motion.div>
      </div>

      {/* Hero */}
      <div ref={containerRef} className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div style={{ y, opacity, scale }} className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            {["MISHAJ", "ADVERTISING"].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.2,
                    ease: "easeOut",
                  }}
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ${
                    i === 0
                      ? "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming brands with cutting-edge design solutions.
            <span className="block mt-2 text-cyan-400">Neon • LED • Steel • Glass • Print</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Our Work
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 bg-transparent px-8 py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Start Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Arrow Down Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full mt-3"
            />
          </motion.div>
          <motion.p
            className="text-cyan-400 text-sm mt-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>

      {/* Overview Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-transparent to-black/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Where Innovation Meets{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Artistry
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-12">
              With over 15 years of experience in the Middle East, we've mastered the art of transforming brands through cutting-edge signage and design solutions. From vibrant neon installations to sophisticated LED displays, every project reflects our commitment to excellence.
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
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">{item.title}</h3>
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
