import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const body = await req.json();
  const supabase = createClient();

  const { error } = await supabase
    .from('job_applications')
    .insert({
      job_id: body.jobId,
      job_title: body.jobTitle,
      name: body.name,
      email: body.email,
      phone: body.phone,
      experience_type: body.experienceType,
      years_of_experience: body.years ? Number(body.years) : null,
    });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
