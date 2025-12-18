import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function ApplicationsPage() {
  const supabase = createClient();

  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('id, title')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Applications by Job</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {jobs?.map(job => (
          <Link
            key={job.id}
            href={`/admin/applications/${job.id}`}
            className="border rounded-lg p-6 hover:bg-muted transition"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">
              View applicants →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
