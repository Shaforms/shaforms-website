import Link from 'next/link'
import { ArrowRight, Award, Users, Building, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TypingText from '@/components/TypingText'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-background to-muted py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-5 font-bold text-secondary tracking-tight animate-fade-up TypingText">

  <span className="inline-block transition-all duration-500 ease-out hover:-translate-y-1">
    "Defining the
  </span>{' '}
  <span className="relative inline-block text-primary group cursor-pointer">
    <span className="relative z-10 transition-colors duration-300 group-hover:text-primary/80">
      Skyline"
    </span>

    {/* underline animation */}
    <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </span>
</h1>


            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Premier construction firm with expertise in Residential, Commercial, and Comprehensive turnkey solutions. Our commitment is founded on delivering exceptional quality and fulfilling all project promises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group"
                >
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality Craftsmanship',
                text: 'Delivering high-quality construction with attention to detail',
              },
              {
                icon: Users,
                title: 'Expert Team',
                text: 'Professionals who deliver perfection with keen attention',
              },
              {
                icon: Building,
                title: 'Complete Solutions',
                text: 'From planning to execution, we handle everything',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Shaforms?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring years of experience and dedication to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Individualized attention to every project',
              'High-quality craftsmanship and materials',
              'Comprehensive project management',
              'Expert guidance throughout the process',
              'Timely delivery and execution',
              'Customer satisfaction guaranteed',
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-card p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let’s discuss how we can bring your vision to life
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="bg-card text-secondary hover:bg-card/90"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
