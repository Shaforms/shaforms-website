import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

type Job = {
  id: string;
  title: string;
  description: string | null;
  type: string | null;
  location: string | null;
};

export default async function CareersPage() {
  const supabase = createClient();

  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
  }

  return (
    <main className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Build your career with Shaforms and contribute to projects
            defined by quality and accountability.
          </p>
        </div>

        {/* WHY WORK WITH US */}
        <div className="mb-20">
          <Card className="border border-border bg-card">
            <CardContent className="p-10 md:p-14 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Work at Shaforms?
              </h2>
              <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                We value discipline, teamwork, and professional growth.
                Our people are trusted with responsibility and supported
                to deliver their best work.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: TrendingUp,
              title: 'Career Growth',
              description: 'Clear paths for advancement and development',
            },
            {
              icon: Users,
              title: 'Strong Team',
              description: 'Collaborative and experienced professionals',
            },
            {
              icon: Heart,
              title: 'Work-Life Balance',
              description: 'Respect for personal time and well-being',
            },
            {
              icon: Briefcase,
              title: 'Quality Projects',
              description: 'Work on meaningful construction projects',
            },
          ].map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="border border-border bg-card text-center"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/80">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CURRENT OPENINGS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            Current Openings
          </h2>

          <div className="space-y-4 max-w-5xl mx-auto">
            {!jobs || jobs.length === 0 ? (
              <Card className="border border-border bg-card">
                <CardContent className="p-8 text-center">
                  <p className="text-foreground/70">
                    No open positions at the moment. Please check back later.
                  </p>
                </CardContent>
              </Card>
            ) : (
              jobs.map((job: Job) => (
                <Card
                  key={job.id}
                  className="border border-border bg-card"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-primary mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                          {job.type && (
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4 text-accent" />
                              {job.type}
                            </span>
                          )}
                          {job.location && (
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-accent" />
                              {job.location}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link href={`/careers/apply/${job.id}`}>
  <Button className="bg-accent text-black hover:opacity-90 w-full md:w-auto">
    Apply Now
  </Button>
</Link>

                    </div>
                  </CardHeader>

                  {job.description && (
                    <CardContent>
                      <p className="text-foreground/80">
                        {job.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <Card className="border border-border bg-primary text-white">
          <CardContent className="p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don’t See a Role That Fits?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              We’re always interested in skilled professionals.
              Reach out and we’ll keep you in mind for future roles.
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-accent text-black hover:opacity-90">
                Contact Us
              </Button>
            </Link>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}
