'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { ADMIN_EMAILS } from '@/lib/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader } from 'lucide-react';

export default function AdminLoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in & authorized
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const userEmail = data.session?.user?.email;
      if (userEmail && ADMIN_EMAILS.includes(userEmail)) {
        router.replace('/admin');
      }
    });
  }, [router, supabase]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      toast({
        title: 'Login failed',
        description: error?.message || 'Invalid credentials',
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }

    // 🔒 EMAIL ALLOWLIST CHECK
    if (!ADMIN_EMAILS.includes(data.user.email!)) {
      await supabase.auth.signOut();

      toast({
        title: 'Access denied',
        description: 'You are not authorized to access admin panel.',
        variant: 'destructive',
      });

      setLoading(false);
      return;
    }

    toast({
      title: 'Login successful',
      description: 'Redirecting to admin dashboard…',
    });

    router.replace('/admin');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8">

        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary">
            Admin Login
          </h1>
          <p className="text-sm text-foreground/70 mt-1">
            Shaforms Infrastructures LLP
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-foreground/40" />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-foreground/40" />
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-accent text-black hover:opacity-90"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader className="h-4 w-4 animate-spin" />
                Signing in…
              </span>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
      </div>
    </main>
  );
}
