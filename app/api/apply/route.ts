export const runtime = 'nodejs';

export async function POST(req: Request) {
  console.log('🔥 APPLY API HIT');

  const body = await req.json();
  console.log('BODY:', body);

  return Response.json({ success: true });
}
