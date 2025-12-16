'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewProjectPage() {
  const supabase = createClient()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [form, setForm] = useState({
    title: '',
    location: '',
    year: '',
  })

  const uploadImage = async () => {
    if (!imageFile) return null

    const fileExt = imageFile.name.split('.').pop()
    const fileName = `${crypto.randomUUID()}.${fileExt}`
    const filePath = `projects/${fileName}`

    const { error } = await supabase.storage
      .from('project-images')
      .upload(filePath, imageFile)

    if (error) {
      alert(error.message)
      return null
    }

    const { data } = supabase.storage
      .from('project-images')
      .getPublicUrl(filePath)

    return data.publicUrl
  }

  const handleSubmit = async () => {
    if (!form.title) {
      alert('Title is required')
      return
    }

    setLoading(true)

    const image_url = await uploadImage()

    const { error } = await supabase.from('projects').insert({
      ...form,
      image_url,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    router.push('/admin/projects')
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Add New Project</h1>

      <div className="space-y-4">
        <Input
          placeholder="Project Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <Input
          placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <Input
          placeholder="Year"
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />

        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        />

        <Button onClick={handleSubmit} disabled={loading} className="w-full">
          {loading ? 'Uploading...' : 'Save Project'}
        </Button>
      </div>
    </section>
  )
}
