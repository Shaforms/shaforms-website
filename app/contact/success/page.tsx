export default function ContactSuccess() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-bold mb-4 animate-fade-up">Thank you for reaching us</h1>
      <p className="text-muted-foreground mb-6">
        We’ve received your message and will contact you shortly.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg"
      >
        Return to Home
      </a>
    </div>
  )
}
