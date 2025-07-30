"use client"

import { motion } from "framer-motion"
import { Award, Users, Globe, Zap, Target, Heart, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FloatingNav from "@/components/floating-nav"
import WhatsAppButton from "@/components/whatsapp-button"

export default function AboutPage() {
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
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">

      <FloatingNav />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 mt-11">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Born from a vision to transform the advertising landscape in the Middle East,
              Mishaj has evolved into a powerhouse of creativity and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Crafting Excellence Since <span className="text-blue-400">2009</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  What started as a small design studio has grown into the Middle East's premier advertising agency.
                  Our journey began with a simple belief: that exceptional design has the power to transform businesses
                  and create lasting impressions.
                </p>
                <p>
                  Today, we stand as industry leaders, equipped with state-of-the-art facilities and a team of
                  visionary designers who push the boundaries of what's possible. From neon artistry to LED
                  innovations, every project reflects our commitment to excellence.
                </p>
                <p>
                  Our well-established infrastructure houses the latest technology and equipment, enabling us to
                  deliver projects that not only meet but exceed our clients' expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Drives Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
        </div>
      </section>
    </div>
  )
}
