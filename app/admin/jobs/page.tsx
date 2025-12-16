'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

type Job = {
  id: string
  title: string
  location: string
  type: string
  is_active: boolean
}

export default function AdminJobsPage() {
  const supabase = createClient()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false })

      setJobs(data || [])
      setLoading(false)
    }

    fetchJobs()
  }, [])

  const handleDelete = async (id: string) => {
    const confirmed = confirm(
      'Delete this job opening? This cannot be undone.'
    )
    if (!confirmed) return

    const { error } = await supabase.from('jobs').delete().eq('id', id)
    if (error) {
      alert(error.message)
      return
    }

    setJobs(jobs.filter((j) => j.id !== id))
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Jobs</h1>

        <Link
          href="/admin/jobs/new"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          + Add Job
        </Link>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}

      {!loading && jobs.length === 0 && (
        <p className="text-gray-500">No job openings yet.</p>
      )}

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">
                {job.title}{' '}
                {!job.is_active && (
                  <span className="text-sm text-red-500">(Inactive)</span>
                )}
              </h2>
              <p className="text-sm text-gray-500">
                {job.location} • {job.type}
              </p>
            </div>

            <div className="space-x-4">
              <Link
                href={`/admin/jobs/${job.id}/edit`}
                className="text-blue-600"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(job.id)}
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
