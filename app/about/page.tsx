import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Shaforms
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building excellence across Kerala with dedication and expertise
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-card">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shaforms Constructions is a premier construction company based in
                  Malappuram, Kerala, specializing in residential, commercial, and
                  turnkey construction projects. With years of experience and a
                  commitment to excellence, we have established ourselves as a
                  trusted name in the construction industry.
                </p>
                <p>
                  Our foundation is excellence, delivering what we promised. We
                  believe in building lasting relationships with our clients
                  through quality craftsmanship, innovative design solutions, and
                  unwavering dedication to project success.
                </p>
                <p>
                  At Shaforms, we understand that your project is more than just a
                  construction endeavor — it’s the realization of your dreams.
                  That’s why we provide individualized attention to every client,
                  ensuring their vision is brought to life with precision and
                  care.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Our Vision',
              text:
                'To be the trusted leader in construction,recognized for excellence in safety,sustainability and client satisfaction, shaping resilient built environments for future generations.',
            },
            {
              icon: Eye,
              title: 'Our Mission',
              text:
                'To deliver safe, sustainable and high quality infrastructure solutions on time, while fostering integrity, innovation and teamwork for clients, employees and communities.',
            },
          ].map((item, i) => (
            <Card key={i} className="border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CORE VALUES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Delivering the highest quality in every project',
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'Building trust through transparency and honesty',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Embracing new technologies and smarter solutions',
              },
              {
                icon: Eye,
                title: 'Customer Focus',
                description: 'Putting client satisfaction first, always',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg text-center group hover:shadow-xl transition-all bg-card"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary transition-colors">
                      <Icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* WHY WORK WITH US */}
        <Card className="border-0 shadow-lg bg-secondary text-secondary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Why Work With Us?
            </h2>

            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Your projects are handled by professionals who deliver perfection
              with attention to detail, modern construction practices, and a
              commitment to quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              {[
                'Experienced team of professionals',
                'Quality materials and craftsmanship',
                'Timely project completion',
                'Transparent communication',
                'After-sales support',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary-foreground flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
