// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { Zap } from "lucide-react"
// import Link from "next/link"
// import FloatingNav from "@/components/floating-nav"
// import WhatsAppButton from "@/components/whatsapp-button"

// export default function Navbar() {
//   const [currentSection, setCurrentSection]  = useState (0)

//   return (
//     <>
//       <FloatingNav currentSection={currentSection} setCurrentSection={setCurrentSection} />
//       <WhatsAppButton />

//       {/* Minimal Brand Logo - Only for other pages */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
//       >
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl backdrop-blur-xl">
//             <Zap className="h-6 w-6 text-white" />
//           </div>
//           <span className="text-xl font-bold text-white">MISHAJ</span>
//         </Link>
//       </motion.div>
//     </>
//   )
// }
