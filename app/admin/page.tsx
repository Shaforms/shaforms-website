'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ADMIN_EMAILS } from '@/lib/admin';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Building, Briefcase, LogOut, Loader } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // ❌ Not logged in
      if (!session?.user?.email) {
        router.replace('/admin/login');
        return;
      }

      // ❌ Logged in but not admin
      if (!ADMIN_EMAILS.includes(session.user.email)) {
        await supabase.auth.signOut();
        router.replace('/admin/login');
        return;
      }

      // ✅ Authorized admin
      setUserEmail(session.user.email);
      setLoading(false);
    };

    checkAuth();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-primary">
              Admin Dashboard
            </h1>
            <p className="text-sm text-foreground/70">
              Logged in as {userEmail}
            </p>
          </div>

          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-destructive text-destructive"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Link href="/admin/projects">
            <Card className="border border-border bg-card hover:shadow-lg cursor-pointer">
              <CardHeader>
                <Building className="h-8 w-8 text-primary mb-3" />
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent>
                Add, edit or delete project data.
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/jobs">
            <Card className="border border-border bg-card hover:shadow-lg cursor-pointer">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-3" />
                <CardTitle>Manage Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                Manage job openings and status.
              </CardContent>
            </Card>
          </Link>

<Link href="/admin/applications">
  <div className="rounded-xl border p-6 hover:shadow-md transition">
    <h3 className="text-xl font-semibold">Manage Applications</h3>
    <p className="text-sm text-muted-foreground">
      View and review job applications.
    </p>
  </div>
</Link>


        </div>
      </div>
    </main>
  );
}
