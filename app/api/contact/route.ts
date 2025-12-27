import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const supabase = createClient()
    const { firstName, lastName, email, phone, message } = await req.json()

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      )
    }

    const { error } = await supabase.from('contacts').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
      is_new: true, // NEW message
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Database insert failed' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}
