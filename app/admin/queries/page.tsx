import { createClient } from '@/lib/supabase/server'

export default async function QueriesPage() {
  const supabase = createClient()

  const { data: queries, error } = await supabase
    .from('contact_queries')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <p>Error loading queries</p>
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Contact Queries</h1>

      {(!queries || queries.length === 0) && (
        <p>No queries yet.</p>
      )}

      {queries && queries.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {queries.map(q => (
                <tr key={q.id} className="border-t align-top">
                  <td className="p-3">
                    {q.first_name} {q.last_name}
                  </td>
                  <td className="p-3">{q.email}</td>
                  <td className="p-3">{q.phone}</td>
                  <td className="p-3 max-w-md">{q.message}</td>
                  <td className="p-3">
                    {new Date(q.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}
