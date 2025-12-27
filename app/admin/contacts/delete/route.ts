import { supabaseAdmin } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) return NextResponse.redirect('/admin/queries')

  await supabaseAdmin.from('contacts').delete().eq('id', id)

  return NextResponse.redirect('/admin/queries')
}
