// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"
// import { Home, User, Briefcase, ImageIcon, Mail, Menu, X, BookOpen } from "lucide-react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export default function FloatingNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   const pathname = usePathname()

//   const navItems = [
//     { icon: Home, label: "Home", href: "/" },
//     { icon: User, label: "About", href: "/about" },
//     { icon: Briefcase, label: "Services", href: "/services" },
//     { icon: ImageIcon, label: "Gallery", href: "/gallery" },
//     { icon: BookOpen, label: "Catalogue", href: "/catalogue" },
//     { icon: Mail, label: "Contact", href: "/contact" },
//   ]

//   useEffect(() => {
//     setMounted(true)
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     handleScroll()
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   if (!mounted) return null

//   return (
//     <>
//       {/* Desktop Floating Navigation */}
//       <motion.nav
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
//         className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
//       >
//         <motion.div
//           className={`bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 transition-all duration-500 ${
//             scrolled ? "bg-black/40 border-white/20" : ""
//           }`}
//           whileHover={{ scale: 1.02 }}
//         >
//           {navItems.map((item, index) => {
//             const isActive = pathname === item.href
//             return (
//               <motion.div
//                 key={item.label}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 1.2 + index * 0.1 }}
//               >
//                 <Link href={item.href}>
//                   <motion.button
//                     className={`w-14 h-14 rounded-2xl cursor-pointer flex items-center justify-center mb-3 last:mb-0 transition-all duration-300 group relative overflow-hidden ${
//                       isActive
//                         ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg"
//                         : "text-gray-400 hover:text-white hover:bg-white/10"
//                     }`}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <item.icon className="w-6 h-6 relative z-10" />

//                     {isActive && (
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl"
//                         layoutId="activeBackground"
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       />
//                     )}

//                     <motion.div
//                       className="absolute left-20 bg-black/90 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-20"
//                       initial={{ x: -10, opacity: 0 }}
//                       whileHover={{ x: 0, opacity: 1 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {item.label}
//                       <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/90 rotate-45" />
//                     </motion.div>

//                     <motion.div
//                       className="absolute inset-0 bg-white/20 rounded-2xl opacity-0"
//                       whileHover={{ opacity: 1, scale: 1.2 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.button>
//                 </Link>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </motion.nav>

//       {/* Mobile Toggle Button */}
//       <motion.button
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ delay: 1, duration: 0.5, type: "spring" }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-6 right-6 z-50 lg:hidden w-14 h-14 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <AnimatePresence mode="wait">
//           {isOpen ? (
//             <motion.div
//               key="close"
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <X className="w-6 h-6" />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="menu"
//               initial={{ rotate: 90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: -90, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Menu className="w-6 h-6" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-40 lg:hidden bg-black/90 backdrop-blur-xl flex items-center justify-center"
//           >
//             <div className="grid grid-cols-2 gap-8 p-8">
//               {navItems.map((item, index) => {
//                 const isActive = pathname === item.href
//                 return (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, y: 50, scale: 0.8 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ delay: index * 0.1, type: "spring" }}
//                   >
//                     <Link href={item.href} onClick={() => setIsOpen(false)}>
//                       <motion.div
//                         className={`flex flex-col items-center space-y-3 p-6 rounded-3xl transition-all duration-300 ${
//                           isActive
//                             ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
//                             : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
//                         }`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <item.icon className="w-8 h-8" />
//                         <span className="text-lg font-medium">{item.label}</span>
//                       </motion.div>
//                     </Link>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Catalogue", href: "/catalogue" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/90 backdrop-blur-xl absolute top-20 left-0 w-full flex flex-col items-center py-8"
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center py-3"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
