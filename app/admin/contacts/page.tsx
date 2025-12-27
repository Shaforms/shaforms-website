import { createClient } from '@/lib/supabase/server'

export default async function AdminContactsPage() {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <p>Error loading messages</p>
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Enquiries</h1>

      <div className="space-y-4">
        {data?.map((msg) => (
          <div
            key={msg.id}
            className="border rounded-lg p-4 bg-card"
          >
            <p className="font-semibold">
              {msg.first_name} {msg.last_name}
            </p>
            <p className="text-sm">{msg.email} • {msg.phone}</p>
            <p className="mt-2 text-muted-foreground">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
