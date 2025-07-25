"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, EyeOff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      title: "Restaurant Neon Sign",
      category: "neon",
      description: "Custom neon signage for upscale restaurant",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "LED Display Board",
      category: "led",
      description: "Digital LED display for shopping mall",
      image: "/placeholder.svg?height=300&width=400",
    },
  ])
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleLogin = () => {
    if (password === "mishaj2024") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  const handleAddItem = (newItem: Omit<GalleryItem, "id">) => {
    const id = Math.max(...galleryItems.map((item) => item.id), 0) + 1
    setGalleryItems([...galleryItems, { ...newItem, id }])
    setIsDialogOpen(false)
  }

  const handleEditItem = (updatedItem: GalleryItem) => {
    setGalleryItems(galleryItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
    setEditingItem(null)
    setIsDialogOpen(false)
  }

  const handleDeleteItem = (id: number) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-96 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Admin Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Enter admin password"
                />
              </div>
              <Button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage gallery images and content</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <EyeOff className="w-4 h-4 mr-2" />
              Logout
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setEditingItem(null)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Item
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>{editingItem ? "Edit Gallery Item" : "Add New Gallery Item"}</DialogTitle>
                </DialogHeader>
                <ItemForm
                  item={editingItem}
                  onSubmit={editingItem ? handleEditItem : handleAddItem}
                  onCancel={() => {
                    setIsDialogOpen(false)
                    setEditingItem(null)
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{item.category}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        onClick={() => {
                          setEditingItem(item)
                          setIsDialogOpen(true)
                        }}
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/20 text-red-400 hover:bg-red-500/10 bg-transparent"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ItemForm({
  item,
  onSubmit,
  onCancel,
}: {
  item: GalleryItem | null
  onSubmit: (item: any) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    title: item?.title || "",
    category: item?.category || "",
    description: item?.description || "",
    image: item?.image || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (item) {
      onSubmit({ ...item, ...formData })
    } else {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="neon">Neon Lights</SelectItem>
            <SelectItem value="led">LED Solutions</SelectItem>
            <SelectItem value="metal">Metal Signage</SelectItem>
            <SelectItem value="engraving">Engraving</SelectItem>
            <SelectItem value="printing">Printing</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="bg-white/10 border-white/20 text-white"
          placeholder="/placeholder.svg?height=300&width=400"
          required
        />
      </div>
      <div className="flex gap-2 pt-4">
        <Button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {item ? "Update" : "Add"} Item
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
