'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function NewJobPage() {
  const supabase = createClient()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    location: '',
    type: '',
    description: '',
  })

  const handleSubmit = async () => {
    if (!form.title) {
      alert('Job title is required')
      return
    }

    setLoading(true)

    const { error } = await supabase.from('jobs').insert({
      ...form,
      is_active: true,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    router.push('/admin/jobs')
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Add Job Opening</h1>

      <div className="space-y-4">
        <Input
          placeholder="Job Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          placeholder="Location"
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />
        <Input
          placeholder="Type (Full-time / Part-time)"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <Textarea
          placeholder="Job Description"
          rows={5}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <Button onClick={handleSubmit} disabled={loading} className="w-full">
          {loading ? 'Saving...' : 'Save Job'}
        </Button>
      </div>
    </section>
  )
}
