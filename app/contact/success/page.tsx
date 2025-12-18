import Link from 'next/link'

export default function ContactSuccess() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        Thank you for reaching us
      </h1>
      <p className="text-muted-foreground mb-8">
        We’ve received your message and will contact you soon.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg"
      >
        Return to Home
      </Link>
    </main>
  )
}
