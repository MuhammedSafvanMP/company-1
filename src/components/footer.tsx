// "use client"

// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Zap } from "lucide-react"
// import Link from "next/link"

// export default function Footer() {
//   return (
//     <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
//                 <Zap className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white">MISHAJ</span>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Leading advertising agency in the Middle East, specializing in innovative design solutions and premium
//               quality products.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
//                 <li key={item}>
//                   <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
//             <ul className="space-y-2">
//               {["Neon Lights", "LED Solutions", "Steel Boards", "Glass Engraving", "Printing"].map((service) => (
//                 <li key={service}>
//                   <span className="text-gray-400">{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-4 w-4 text-blue-400" />
//                 <span className="text-gray-400">+971 XX XXX XXXX</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-4 w-4 text-blue-400" />
//                 <span className="text-gray-400">info@mishaj.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="h-4 w-4 text-blue-400" />
//                 <span className="text-gray-400">Middle East</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="border-t border-white/10 mt-8 pt-8 text-center">
//           <p className="text-gray-400">© {new Date().getFullYear()} Mishaj Advertising Agency. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#021326] border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MISHAJ</span>
            </div>
            <p className="mb-4">
              Leading advertising agency in the Middle East, delivering innovative designs and quality products.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {["Neon Lights", "LED Solutions", "Steel Boards", "Glass Engraving", "Printing"].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>info@mishaj.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Middle East</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Mishaj Advertising Agency. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
