"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Globe, Zap, Target, Heart, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AboutExperienceProps {
  sectionIndex: number
}

export default function AboutExperience({ sectionIndex }: AboutExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const stats = [
    { icon: Award, number: "500+", label: "Projects Completed", color: "from-yellow-400 to-orange-500" },
    { icon: Users, number: "50+", label: "Expert Team", color: "from-blue-400 to-cyan-500" },
    { icon: Globe, number: "15+", label: "Years Experience", color: "from-green-400 to-emerald-500" },
    { icon: TrendingUp, number: "98%", label: "Client Satisfaction", color: "from-purple-400 to-pink-500" },
  ]

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge technology and creative solutions to stay ahead of industry trends.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality control to ensure exceptional results and longevity.",
    },
    {
      icon: Target,
      title: "Client-Centric",
      description: "Your vision drives our process. We collaborate closely to exceed expectations every time.",
    },
    {
      icon: Heart,
      title: "Passionate Craft",
      description: "Our team's passion for design and craftsmanship shows in every detail of our work.",
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Story</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Born from a vision to transform the advertising landscape in the Middle East, Mishaj has evolved into a
            powerhouse of creativity and innovation. Our journey spans over a decade of pushing boundaries and setting
            new standards in design excellence.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-4xl md:text-5xl font-black text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Crafting Excellence Since <span className="text-blue-400">2009</span>
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                What started as a small design studio has grown into the Middle East's premier advertising agency. Our
                journey began with a simple belief: that exceptional design has the power to transform businesses and
                create lasting impressions.
              </p>
              <p>
                Today, we stand as industry leaders, equipped with state-of-the-art facilities and a team of visionary
                designers who push the boundaries of what's possible. From neon artistry to LED innovations, every
                project reflects our commitment to excellence.
              </p>
              <p>
                Our well-established infrastructure houses the latest technology and equipment, enabling us to deliver
                projects that not only meet but exceed our clients' expectations. We've built our reputation on quality,
                innovation, and an unwavering dedication to our craft.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    MISHAJ
                  </div>
                  <p className="text-xl">Transforming Visions into Reality</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Drives Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
