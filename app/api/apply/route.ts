import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const supabase = createClient();

    const { error } = await supabase.from('applications').insert([
      {
        job_id: body.job_id,
        name: body.name,
        email: body.email,
        phone: body.phone,
        experience_type: body.experience_type,
        experience_years: body.experience_years,
      },
    ]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
