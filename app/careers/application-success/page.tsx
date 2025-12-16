import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
  return (
    <main className="py-32 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Application Submitted
      </h1>
      <p className="text-lg mb-8">
        Thank you for applying. We will contact you if shortlisted.
      </p>

      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </main>
  );
}
