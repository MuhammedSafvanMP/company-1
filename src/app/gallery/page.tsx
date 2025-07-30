"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Eye } from "lucide-react"
import Image from "next/image"
import FloatingNav from "@/components/floating-nav"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "neon", name: "Neon Lights" },
    { id: "led", name: "LED Solutions" },
    { id: "metal", name: "Metal Signage" },
    { id: "engraving", name: "Engraving" },
    { id: "printing", name: "Printing" },
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Neon",
      category: "neon",
      image: "/cata-1.jpg",
      description: "Elegant neon installation for 5-star hotel entrance",
      year: "2024",
      client: "Grand Palace Hotel",
      likes: 234,
      views: 1200,
    },
    {
      id: 2,
      title: "Shopping Mall LED",
      category: "led",
      image: "/cata-2.jpg",
      description: "Interactive LED display system for premium shopping center",
      year: "2024",
      client: "City Center Mall",
      likes: 189,
      views: 890,
    },
    {
      id: 3,
      title: "Corporate Steel Signage",
      category: "metal",
      image: "/cata-3.webp",
      description: "Premium steel and brass signage for headquarters building",
      year: "2023",
      client: "Tech Solutions Inc",
      likes: 156,
      views: 670,
    },
    {
      id: 4,
      title: "Restaurant Glass Art",
      category: "engraving",
      image: "/cata-4.jpg",
      description: "Custom glass engraving and artistic installations",
      year: "2024",
      client: "Fusion Restaurant",
      likes: 298,
      views: 1450,
    },
    {
      id: 5,
      title: "Event Branding",
      category: "printing",
      image: "/cata-5.png",
      description: "Complete branding solution for international conference",
      year: "2024",
      client: "Global Summit 2024",
      likes: 167,
      views: 780,
    },
    {
      id: 6,
      title: "Architectural Lighting",
      category: "led",
      image: "/cata-6.jpg",
      description: "LED architectural lighting for modern office complex",
      year: "2023",
      client: "Metro Business Park",
      likes: 203,
      views: 950,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <FloatingNav />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 mt-11">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Works</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of our most impactful projects that have transformed brands and spaces across the Middle East.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                }
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Masonry Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <Card className="bg-black backdrop-blur-xl overflow-hidden group hover:bg-white/10 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />

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
                          <Link href={`/gallery/${project.id}`} key={project.id}>

                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

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
        </div>
      </section>
    </div>
  )
}
