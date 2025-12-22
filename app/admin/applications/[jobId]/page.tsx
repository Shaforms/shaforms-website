import { createClient } from '@/lib/supabase/server';

export default async function JobApplicationsPage({
  params,
}: {
  params: { jobId: string };
}) {
  const supabase = createClient();

  const { data: applications, error } = await supabase
  .from('applications')
  .select(`
    id,
    name,
    email,
    phone,
    experience_type,
    experience_years,
    created_at
  `)
  .eq('job_id', params.jobId)
  .order('created_at', { ascending: false });

const safeApplications = applications ?? [];

  if (error) {
    console.error(error);
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
  <h1 className="text-3xl font-bold mb-8">Applicants</h1>

  {safeApplications.length === 0 && (
    <p>No applications yet.</p>
  )}

  {safeApplications.length > 0 && (
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
        {safeApplications.map(app => (
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
        ))}
      </tbody>
    </table>
  )}
</main>
  );
}
