"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Heart, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectsGalleryProps {
  sectionIndex: number
}

export default function ProjectsGallery({ sectionIndex }: ProjectsGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Neon",
      category: "Hospitality",
      image: "/placeholder.svg?height=600&width=800&text=Luxury+Hotel+Neon",
      description: "Elegant neon installation for 5-star hotel entrance",
      year: "2024",
      client: "Grand Palace Hotel",
      likes: 234,
      views: 1200,
    },
    {
      id: 2,
      title: "Shopping Mall LED",
      category: "Retail",
      image: "/placeholder.svg?height=600&width=800&text=Shopping+Mall+LED",
      description: "Interactive LED display system for premium shopping center",
      year: "2024",
      client: "City Center Mall",
      likes: 189,
      views: 890,
    },
    {
      id: 3,
      title: "Corporate Steel Signage",
      category: "Corporate",
      image: "/placeholder.svg?height=600&width=800&text=Corporate+Steel+Signage",
      description: "Premium steel and brass signage for headquarters building",
      year: "2023",
      client: "Tech Solutions Inc",
      likes: 156,
      views: 670,
    },
    {
      id: 4,
      title: "Restaurant Glass Art",
      category: "F&B",
      image: "/placeholder.svg?height=600&width=800&text=Restaurant+Glass+Art",
      description: "Custom glass engraving and artistic installations",
      year: "2024",
      client: "Fusion Restaurant",
      likes: 298,
      views: 1450,
    },
    {
      id: 5,
      title: "Event Branding",
      category: "Events",
      image: "/placeholder.svg?height=600&width=800&text=Event+Branding",
      description: "Complete branding solution for international conference",
      year: "2024",
      client: "Global Summit 2024",
      likes: 167,
      views: 780,
    },
    {
      id: 6,
      title: "Architectural Lighting",
      category: "Architecture",
      image: "/placeholder.svg?height=600&width=800&text=Architectural+Lighting",
      description: "LED architectural lighting for modern office complex",
      year: "2023",
      client: "Metro Business Park",
      likes: 203,
      views: 950,
    },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Works</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of our most impactful projects that have transformed brands and spaces across the Middle East.
          </motion.p>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden group hover:bg-white/10 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4 text-white/80">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{project.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{project.views}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-400">
                        {project.client} • {project.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
