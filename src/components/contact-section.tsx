"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactSectionProps {
  sectionIndex: number
}

export default function ContactSection({ sectionIndex }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleWhatsApp = () => {
    const message = `Hi Mishaj! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/971XXXXXXXXX?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+971 XX XXX XXXX",
      subtitle: "Available 24/7",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@mishaj.com",
      subtitle: "Quick response guaranteed",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Middle East",
      subtitle: "Multiple locations",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Sun - Thu: 9AM - 6PM",
      subtitle: "Closed Fridays & Saturdays",
      color: "from-orange-400 to-red-500",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your brand? Let's discuss your vision and create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 XX XXX XXXX"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">
                      Service
                    </Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="Neon, LED, Steel, etc."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, timeline, and requirements..."
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleWhatsApp}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent font-semibold py-3 rounded-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                We're here to bring your vision to life. Whether you need custom signage, LED solutions, or any of our
                premium services, our expert team is ready to exceed your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`p-3 bg-gradient-to-r ${info.color} rounded-xl`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <info.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-gray-300 font-medium mb-1">{info.content}</p>
                          <p className="text-gray-400 text-sm">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-white/10 backdrop-blur-xl">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">Need Immediate Assistance?</h4>
                  <p className="text-gray-300 mb-4">For urgent inquiries, reach out directly via WhatsApp</p>
                  <Button
                    onClick={() => window.open("https://wa.me/971XXXXXXXXX", "_blank")}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
