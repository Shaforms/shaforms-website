import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

type Project = {
  id: string;
  title: string;
  location: string | null;
  year: number | null;
  image_url: string | null;
};

export default async function ProjectsPage() {
  const supabase = createClient();

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-background">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
        Our Projects
      </h1>

      {(!projects || projects.length === 0) && (
        <p className="text-center text-muted-foreground">
          No projects added yet.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects?.map((p: Project) => (
          <div
            key={p.id}
            className="group relative overflow-hidden rounded-xl border border-border bg-card"
          >
            {/* IMAGE */}
            <div className="relative h-64 w-full">
              <Image
                src={
                  p.image_url ||
                  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
                }
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          {/* OVERLAY */}
<div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

{/* TEXT */}
<div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
  <h2 className="text-xl font-semibold text-white">
    {p.title}
  </h2>
  <p className="text-sm text-white/90 mt-1">
    {p.location} • {p.year}
  </p>
</div>


            
            
          </div>
        ))}
      </div>
    </section>
  );
}
