import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function JobApplicationsPage({
  params,
}: {
  params: { jobId: string };
}) {
  const supabase = createClient();

  const { data: applications } = await supabase
    .from('applications')
    .select('*')
    .eq('job_id', params.jobId)
    .order('created_at', { ascending: false });

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Job Applications</h1>

      <table className="w-full border rounded-lg">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {applications?.length ? (
            applications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-3">{app.name}</td>
                <td className="p-3">{app.email}</td>
                <td className="p-3">{app.phone}</td>
                <td className="p-3">
                  {app.experience_type}
                  {app.experience_type === 'Experienced' &&
                    ` (${app.experience_years} yrs)`}
                </td>
                <td className="p-3">
                  {new Date(app.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-6 text-center">
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
