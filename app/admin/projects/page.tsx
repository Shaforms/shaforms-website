'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

type Project = {
  id: string
  title: string
  location: string
  year: string
}

export default function AdminProjectsPage() {
  const supabase = createClient()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      setProjects(data || [])
      setLoading(false)
    }

    fetchProjects()
  }, [])

  const handleDelete = async (id: string) => {
    const confirmed = confirm(
      'Are you sure you want to delete this project? This action cannot be undone.'
    )

    if (!confirmed) return

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      alert(error.message)
      return
    }

    // Remove from UI instantly
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Projects</h1>

        <Link
          href="/admin/projects/new"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          + Add Project
        </Link>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}

      {!loading && projects.length === 0 && (
        <p className="text-gray-500">No projects found.</p>
      )}

      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-500">
                {p.location} • {p.year}
              </p>
            </div>

            <div className="space-x-4">
              <Link
                href={`/admin/projects/${p.id}/edit`}
                className="text-blue-600"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(p.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
