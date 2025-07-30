"use client";

import { motion } from "framer-motion";
import { Download, Eye, Link, Star } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import FloatingNav from "@/components/floating-nav";
import WhatsAppButton from "@/components/whatsapp-button";
import { useRouter } from "next/navigation";

export default function CataloguePage() {
    const router = useRouter();

  const catalogueItems = [
    {
      id: 1,
      title: "Neon Signs Collection",
      category: "Neon Lights",
      description: "Complete collection of custom neon signage solutions",
      image: "/cata-1.jpg",
      pages: 24,
      featured: true,
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "LED Solutions Brochure",
      category: "LED Technology",
      description: "Modern LED displays and lighting solutions",
      image: "/cata-2.jpg",
      pages: 18,
      featured: true,
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Metal Signage Portfolio",
      category: "Metal Works",
      description: "Steel and brass signage solutions",
      image: "/cata-3.webp",
      pages: 16,
      featured: false,
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Glass Engraving Showcase",
      category: "Engraving",
      description: "Premium glass and marble engraving services",
      image: "/cata-4.jpg",
      pages: 12,
      featured: false,
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Printing Services Guide",
      category: "Printing",
      description: "Comprehensive printing solutions catalog",
      image: "/cata-5.png",
      pages: 20,
      featured: false,
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "Complete Product Catalog",
      category: "All Services",
      description: "Our complete range of advertising solutions",
      image: "/cata-6.jpg",
      pages: 48,
      featured: true,
      downloadUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <FloatingNav />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 mt-11">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Catalogue
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Browse and download our comprehensive product catalogs and service
              brochures
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogueItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-black/50 text-white"
                      >
                        {item.pages} Pages
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <Badge
                        variant="outline"
                        className="border-blue-400 text-blue-400 mb-3"
                      >
                        {item.category}
                      </Badge>
                      <CardTitle className="text-xl text-white mb-3">
                        {item.title}
                      </CardTitle>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                          size="sm"
                                onClick={() => router.push(`/catalogue/${item.id}`)}

                          className="flex items-center gap-1 flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              How to Use Our Catalogs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get the most out of our product catalogs with these simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse & Select",
                description:
                  "Choose the catalog that matches your project needs",
              },
              {
                step: "02",
                title: "Download PDF",
                description:
                  "Click download to get the high-quality PDF catalog",
              },
              {
                step: "03",
                title: "Contact Us",
                description: "Reference catalog items when requesting quotes",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
