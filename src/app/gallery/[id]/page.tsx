"use client"

import { notFound, useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, Eye, ArrowLeft } from "lucide-react"

// Example data
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
]

export default function ProjectPage() {
  const params = useParams()
  const id = Number(params.id)

  const project = projects.find((p) => p.id === id)
  if (!project) return notFound()

  return (
    <div className="min-h-screen bg-black text-gray-200 px-4 py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto">
        <Link
          href="/gallery"
          className="inline-flex items-center mb-8 text-sm text-cyan-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ✅ Image */}
          <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* ✅ Text block centered vertically */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="mb-2">
              <span className="text-gray-400">Category:</span> {project.category}
            </p>
            <p className="mb-2">
              <span className="text-gray-400">Client:</span> {project.client}
            </p>
            <p className="mb-2">
              <span className="text-gray-400">Year:</span> {project.year}
            </p>

            <div className="flex items-center gap-6 my-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <span>{project.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" />
                <span>{project.views}</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
