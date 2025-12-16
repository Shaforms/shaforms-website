'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH PROJECT
  ========================== */
  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('title, location, year, image_url')
        .eq('id', id)
        .single();

      if (error || !data) {
        alert('Project not found');
        router.push('/admin/projects');
        return;
      }

      setTitle(data.title);
      setLocation(data.location || '');
      setYear(data.year?.toString() || '');
      setExistingImageUrl(data.image_url);
    };

    fetchProject();
  }, [id, router, supabase]);

  /* =========================
     UPDATE PROJECT
  ========================== */
  const handleUpdate = async () => {
    setLoading(true);

    let imageUrl = existingImageUrl;

    // Upload new image if selected
    if (imageFile) {
      const ext = imageFile.name.split('.').pop();
      const fileName = `project-${id}-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(fileName, imageFile, { upsert: true });

      if (uploadError) {
        alert(uploadError.message);
        setLoading(false);
        return;
      }

      imageUrl = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName).data.publicUrl;
    }

    const { error } = await supabase
      .from('projects')
      .update({
        title,
        location,
        year: year ? Number(year) : null,
        image_url: imageUrl,
      })
      .eq('id', id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push('/admin/projects');
  };

  /* =========================
     UI
  ========================== */
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Edit Project</h1>

      <div className="space-y-6">

        <Input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Input
          placeholder="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        {/* EXISTING IMAGE PREVIEW */}
        {existingImageUrl && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Current Image</p>
            <div className="relative w-full h-48 rounded-md overflow-hidden border">
              <Image
                src={existingImageUrl}
                alt="Project image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Upload New Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>

        <Button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Updating...' : 'Update Project'}
        </Button>

      </div>
    </div>
  );
}
