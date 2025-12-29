import { Home, Building2, Briefcase, ClipboardCheck } from 'lucide-react'
import { Factory,Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'We provide homeowners with individualized attention and high-quality craftsmanship for both new construction and renovations, realizing their dreams.',
  },
  {
    icon: Briefcase,
    title: 'Commercial & High Rised Buildings',
    description:
      'We specialize in customized commercial facilities, managing projects with a strong focus on efficiency, quality control, and timelines.',
  },
  {
    icon: Factory,
    title: 'Steel Structures & Pre-Engineering Structures',
    description:
      'We design and execute steel and pre-engineered structures that offer faster construction, cost efficiency, and long-term durability. Ideal for industrial, commercial, and large-span applications with precision-driven engineering.',
  },
  {
    icon: Layers,
    title: 'Post-Tension (PT) Concrete Structures',
    description:
      'We provide post-tension concrete solutions that allow longer spans, reduced slab thickness, and improved structural performance—perfect for modern buildings and open-plan spaces.',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management Consultancy',
    description:
      'Expert guidance across the project lifecycle, ensuring optimized execution, risk mitigation, and successful delivery.',
  },
  {
    icon: Building2,
    title: 'Turnkey Construction Projects',
    description:
      'Comprehensive end-to-end project handling that ensures peace of mind, efficiency, and consistent quality from planning to handover.',
  },
  
]

export default function ServicesPage() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your projects are in the hands of professionals who deliver perfection
            with a keen eye for detail.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group border-0 bg-card shadow-lg hover:shadow-xl transition-all"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4 group-hover:bg-secondary transition-colors">
                    <Icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>

                  <CardTitle className="text-2xl text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* POSITIONING */}
        <div className="mt-16 bg-card rounded-xl shadow-sm p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Key Positioning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shaforms emphasizes that every project is handled by experienced
            professionals who deliver precision, quality, and reliability —
            making excellence our defining standard.
          </p>
        </div>

      </div>
    </div>
  )
}
