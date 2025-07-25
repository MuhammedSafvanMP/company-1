"use client"

import { motion, useScroll } from "framer-motion"
import { useRef, useState } from "react"
import { Lightbulb, Zap, Shield, Gem, Printer, Palette, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ServicesShowcaseProps {
  sectionIndex: number
}

export default function ServicesShowcase({ sectionIndex }: ServicesShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: Lightbulb,
      title: "Neon Artistry",
      subtitle: "Illuminating Dreams",
      description:
        "Custom neon installations that breathe life into spaces with vibrant, energy-efficient lighting solutions.",
      image: "/placeholder.svg?height=400&width=600&text=Neon+Lights",
      color: "from-yellow-400 to-orange-500",
      features: ["Custom Shapes", "RGB Colors", "Smart Controls", "Weather Resistant"],
    },
    {
      icon: Zap,
      title: "LED Innovation",
      subtitle: "Future of Lighting",
      description:
        "Cutting-edge LED displays and architectural lighting that transform environments with precision and style.",
      image: "/placeholder.svg?height=400&width=600&text=LED+Solutions",
      color: "from-blue-400 to-cyan-500",
      features: ["4K Displays", "Interactive", "Energy Efficient", "Programmable"],
    },
    {
      icon: Shield,
      title: "Metal Mastery",
      subtitle: "Built to Last",
      description: "Premium steel and brass signage with anti-corrosive finishes for enduring outdoor applications.",
      image: "/placeholder.svg?height=400&width=600&text=Metal+Signage",
      color: "from-gray-400 to-gray-600",
      features: ["Corrosion Proof", "Precision Cut", "Custom Finish", "Industrial Grade"],
    },
    {
      icon: Gem,
      title: "Glass Elegance",
      subtitle: "Precision Engraving",
      description:
        "Sophisticated glass and marble engraving services for luxury applications and architectural elements.",
      image: "/placeholder.svg?height=400&width=600&text=Glass+Engraving",
      color: "from-purple-400 to-pink-500",
      features: ["Laser Precision", "3D Engraving", "Custom Designs", "Premium Materials"],
    },
    {
      icon: Printer,
      title: "Print Excellence",
      subtitle: "Visual Communication",
      description:
        "High-resolution printing solutions across all formats and materials for comprehensive brand experiences.",
      image: "/placeholder.svg?height=400&width=600&text=Printing+Services",
      color: "from-green-400 to-emerald-500",
      features: ["Large Format", "UV Printing", "Various Materials", "Color Accuracy"],
    },
    {
      icon: Palette,
      title: "Creative Design",
      subtitle: "Brand Identity",
      description:
        "Comprehensive design solutions that capture your brand essence and create memorable visual experiences.",
      image: "/placeholder.svg?height=400&width=600&text=Custom+Design",
      color: "from-pink-400 to-rose-500",
      features: ["Brand Strategy", "3D Visualization", "Concept Development", "Creative Direction"],
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

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
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Craft</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where innovation meets artistry. Each service represents years of expertise and passion for creating
            extraordinary experiences.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden h-full hover:bg-white/10 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Service Icon */}
                  <motion.div
                    className={`absolute top-6 left-6 p-4 bg-gradient-to-r ${service.color} rounded-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  >
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={hoveredService === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="text-xs text-gray-300 bg-white/10 rounded-lg px-2 py-1 backdrop-blur-sm"
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                  <Button
                    variant="outline"
                    className="group border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">Our Creative Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating innovative concepts and prototypes" },
              { step: "03", title: "Develop", desc: "Precision manufacturing with quality control" },
              { step: "04", title: "Deploy", desc: "Professional installation and ongoing support" },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/10 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-white mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
