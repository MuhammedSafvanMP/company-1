// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useState, useEffect, useRef } from "react"
// import { Play, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import WhatsAppButton from "@/components/whatsapp-button"
//  import FloatingNav from "@/components/floating-nav"

// export default function HomePage() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       <FloatingNav />
//       <WhatsAppButton />

//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full blur-3xl"
//             style={{
//               width: `${200 + i * 20}px`,
//               height: `${200 + i * 20}px`,
//               background: `linear-gradient(45deg, ${
//                 i % 2 === 0 ? "#06b6d4" : "#10b981"
//               }, transparent)`,
//               left: `${5 + i * 7}%`,
//               top: `${5 + i * 5}%`,
//               opacity: 0.3,
//             }}
//             animate={{
//               x: [0, 150, -100, 0],
//               y: [0, -120, 80, 0],
//               scale: [1, 1.3, 0.8, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20 + i * 2,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         {/* Mouse Follower */}
//         <motion.div
//           className="absolute pointer-events-none z-10"
//           animate={{
//             x: mousePosition.x - 40,
//             y: mousePosition.y - 40,
//           }}
//           transition={{ type: "spring", damping: 20, stiffness: 150 }}
//         >
//           <div className="relative">
//             <div className="w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl" />
//             <div className="absolute inset-0 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm top-6 left-6" />
//           </div>
//         </motion.div>
//       </div>

//       {/* Hero */}
//       <div ref={containerRef} className="relative z-10 flex items-center justify-center min-h-screen px-4">
//         <motion.div style={{ y, opacity, scale }} className="text-center max-w-5xl mx-auto">
//           <div className="mb-8">
//             {["MISHAJ", "ADVERTISING"].map((word, i) => (
//               <div key={word} className="overflow-hidden">
//                 <motion.h1
//                   initial={{ y: 150 }}
//                   animate={{ y: 0 }}
//                   transition={{
//                     duration: 1,
//                     delay: 0.2 + i * 0.2,
//                     ease: "easeOut",
//                   }}
//                   className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ${
//                     i === 0
//                       ? "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
//                       : "text-white"
//                   }`}
//                 >
//                   {word}
//                 </motion.h1>
//               </div>
//             ))}
//           </div>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.7 }}
//             className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
//           >
//             Transforming brands with cutting-edge design solutions.
//             <span className="block mt-2 text-cyan-400">Neon • LED • Steel • Glass • Print</span>
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//           >
//             <Link href="/services">
//               <Button
//                 size="lg"
//                 className="group bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
//               >
//                 <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Explore Our Work
//               </Button>
//             </Link>

//             <Link href="/contact">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white/20 text-white hover:bg-white/10 bg-transparent px-8 py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
//               >
//                 Start Project
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Arrow Down Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
//           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
//         >
//           <motion.div
//             animate={{ y: [0, 15, 0] }}
//             transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//             className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden"
//           >
//             <motion.div
//               animate={{ y: [0, 20, 0] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//               className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full mt-3"
//             />
//           </motion.div>
//           <motion.p
//             className="text-cyan-400 text-sm mt-3"
//             animate={{ opacity: [0.6, 1, 0.6] }}
//             transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//           >
//             Scroll to explore
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Overview Section */}
//       <section className="relative z-10 py-32 bg-gradient-to-b from-transparent to-black/60">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
//               Where Innovation Meets{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                 Artistry
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-12">
//               With over 15 years of experience in the Middle East, we've mastered the art of transforming brands through cutting-edge signage and design solutions. From vibrant neon installations to sophisticated LED displays, every project reflects our commitment to excellence.
//             </p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { title: "Neon Artistry", desc: "Custom illuminated experiences" },
//                 { title: "LED Innovation", desc: "Smart digital solutions" },
//                 { title: "Premium Materials", desc: "Steel, brass & glass mastery" },
//                 { title: "Creative Design", desc: "Unique brand expressions" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">{item.title}</h3>
//                   <p className="text-gray-400 text-sm">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }



// "use client"

// import { motion } from "framer-motion"
// import { ArrowRight, Award, Users, Zap, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
// import Image from "next/image"
// import FloatingNav from "@/components/floating-nav"


// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// }

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//      <FloatingNav />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//         </div>

//         <div className="container mx-auto px-4 z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center"
//           >
//             <motion.h1
//               className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
//               initial={{ scale: 0.5 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               MISHAJ
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl text-gray-300 mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               Advertising Agency
//             </motion.p>
//             <motion.p
//               className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//             >
//               Highly creative and innovative designers using latest software to design best products for clients.
//               Specializing in Neon lights, LED lights, Steel Boards, and premium printing solutions.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
//               >
//                 <Link href="/services" className="flex items-center">
//                   Our Services <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white/20 text-white hover:bg-white/10 bg-transparent"
//               >
//                 <Link href="/contact">Get Quote</Link>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-black/20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {[
//               { icon: Award, title: "Premium Quality", desc: "High-end quality products with dimensional accuracy" },
//               { icon: Users, title: "Expert Team", desc: "Highly creative and innovative designers" },
//               { icon: Zap, title: "Latest Technology", desc: "Using cutting-edge software and equipment" },
//               { icon: Globe, title: "Middle East Experience", desc: "Vast industrial experience in the region" },
//             ].map((feature, index) => (
//               <motion.div key={index} variants={fadeInUp}>
//                 <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
//                   <CardContent className="p-6 text-center">
//                     <div className="mb-4 flex justify-center">
//                       <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300">
//                         <feature.icon className="h-6 w-6 text-white" />
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
//                     <p className="text-gray-400">{feature.desc}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Comprehensive advertising solutions for all your business needs
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 title: "Neon Lights",
//                 desc: "Custom neon signage with vibrant colors",
//                 image: "/placeholder.svg?height=300&width=400",
//               },
//               {
//                 title: "LED Solutions",
//                 desc: "Energy-efficient LED displays and lighting",
//                 image: "/placeholder.svg?height=300&width=400",
//               },
//               {
//                 title: "Steel & Brass Boards",
//                 desc: "Durable metal signage solutions",
//                 image: "/placeholder.svg?height=300&width=400",
//               },
//               {
//                 title: "Glass Engraving",
//                 desc: "Precision glass and marble engraving",
//                 image: "/placeholder.svg?height=300&width=400",
//               },
//               {
//                 title: "Printing Services",
//                 desc: "All kinds of professional printing",
//                 image: "/placeholder.svg?height=300&width=400",
//               },
//               {
//                 title: "Custom Design",
//                 desc: "Unique designs tailored to your brand",
//                 image: "/placeholder.svg?height=300&width=400",
//               },
//             ].map((service, index) => (
//               <motion.div key={index} variants={fadeInUp}>
//                 <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden">
//                     <Image
//                       src={service.image || "/placeholder.svg"}
//                       alt={service.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
//                     <p className="text-gray-400">{service.desc}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//             >
//               <Link href="/services">View All Services</Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Let our expert team create stunning advertising solutions that make your business stand out
//             </p>
//             <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
//               <Link href="/contact" className="flex items-center">
//                 Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Award, Users, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import FloatingNav from "@/components/floating-nav"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const carouselImages = [
    "/cata-1.jpg",
    "/cata-5.png",
    "/cata-4.jpg",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021326] via-[#04304c] to-[#021326]">
      <FloatingNav />

      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {carouselImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Slide ${i}`}
              fill
              className={`object-cover object-center transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#021326]/60 to-[#000000]/80" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              MISHAJ
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-4"
            >
              Advertising Agency
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Creative & innovative designers for Neon, LED, Steel Boards, and premium printing.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3"
              >
                <Link href="/services" className="flex items-center">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-white hover:bg-cyan-700/20 bg-transparent"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#021326] to-[#04304c]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, title: "Premium Quality", desc: "High-end precision signage & prints" },
              { icon: Users, title: "Expert Team", desc: "Creative & innovative designers" },
              { icon: Zap, title: "Modern Technology", desc: "Latest tools & software" },
              { icon: Globe, title: "Regional Experience", desc: "Trusted across Middle East" },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 transition group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#021326]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete advertising solutions for your business.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Neon Lights",
                desc: "Custom neon signage.",
                image: "/cata-1.jpg",
              },
              {
                title: "LED Displays",
                desc: "Modern energy-saving LED panels.",
                image: "/cata-2.jpg",
              },
              {
                title: "Steel & Brass Boards",
                desc: "Durable metal sign solutions.",
                image: "/cata-3.webp",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/40 to-blue-600/40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let’s create stunning signage & advertising that gets noticed.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
              <Link href="/contact" className="flex items-center">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
