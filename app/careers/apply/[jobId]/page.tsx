'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

type ExperienceType = 'Fresher' | 'Experienced';

export default function ApplyPage() {
  const params = useParams();
  const jobId = params.jobId as string; // ✅ force string
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceType, setExperienceType] =
    useState<ExperienceType>('Fresher');
  const [years, setYears] = useState<number | ''>('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    // 🔴 Basic validation (important)
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill all required fields.');
      return;
    }

    if (experienceType === 'Experienced' && (!years || years < 1)) {
      setError('Please enter valid years of experience.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_id: jobId,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          experience_type: experienceType,
          experience_years:
            experienceType === 'Experienced' ? Number(years) : null, // ✅ FIX
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Application submission failed');
      }

      router.push('/careers/application-success');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10 text-primary">
        Apply for this Position
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow">

        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <select
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={experienceType}
            onChange={e =>
              setExperienceType(e.target.value as ExperienceType)
            }
          >
            <option value="Fresher">Fresher</option>
            <option value="Experienced">Experienced</option>
          </select>
        </div>

        {experienceType === 'Experienced' && (
          <div>
            <label className="block mb-1 font-medium">
              Years of Experience
            </label>
            <input
              type="number"
              min={1}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              required
            />
          </div>
        )}

        {error && (
          <p className="text-red-600 font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-60"
        >
          {loading ? 'Submitting…' : 'Submit Application'}
        </button>
      </form>
    </main>
  );
}
