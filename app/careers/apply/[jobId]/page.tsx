'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function ApplyPage() {
  const { jobId } = useParams();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceType, setExperienceType] = useState('Fresher');
  const [years, setYears] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Job Application – ${jobId}`);
    const body = encodeURIComponent(`
Name: ${name}
Email: ${email}
Phone: ${phone}
Experience: ${experienceType}
Years of Experience: ${experienceType === 'Experienced' ? years : 'N/A'}
    `);

    // 🔥 THIS OPENS GMAIL WEB DIRECTLY
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=mohammedadhilpmr@gmail.com&subject=${subject}&body=${body}`;

    // Redirect to success page after small delay
    setTimeout(() => {
      router.push('/careers/application-success');
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-6">
      <Card>
        <CardContent className="p-8">
          <h1 className="text-2xl font-bold mb-6">
            Apply for this Position
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <select
              className="w-full border rounded-md px-3 py-2"
              value={experienceType}
              onChange={(e) => setExperienceType(e.target.value)}
            >
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>

            {experienceType === 'Experienced' && (
              <Input
                placeholder="Years of Experience"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                required
              />
            )}

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
