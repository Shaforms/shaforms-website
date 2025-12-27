import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ContactSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Thank you for reaching us
        </h1>
        <p className="text-muted-foreground mb-6">
          We have received your message and will contact you shortly.
        </p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}
