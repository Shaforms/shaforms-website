'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function EditJobPage() {
  const supabase = createClient()
  const router = useRouter()
  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    title: '',
    location: '',
    type: '',
    description: '',
    is_active: true,
  })

  useEffect(() => {
    const fetchJob = async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        router.push('/admin/jobs')
        return
      }

      setForm(data)
      setLoading(false)
    }

    fetchJob()
  }, [])

  const handleUpdate = async () => {
    setSaving(true)

    const { error } = await supabase
      .from('jobs')
      .update(form)
      .eq('id', id)

    setSaving(false)

    if (error) {
      alert(error.message)
      return
    }

    router.push('/admin/jobs')
  }

  if (loading) return <p className="text-center py-20">Loading...</p>

  return (
    <section className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Edit Job</h1>

      <div className="space-y-4">
        <Input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />
        <Input
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <Textarea
          rows={5}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(e) =>
              setForm({ ...form, is_active: e.target.checked })
            }
          />
          Job is active
        </label>

        <Button onClick={handleUpdate} disabled={saving} className="w-full">
          {saving ? 'Updating...' : 'Update Job'}
        </Button>
      </div>
    </section>
  )
}
