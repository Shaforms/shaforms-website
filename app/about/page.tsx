import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react'
import { Handshake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'



export default function AboutPage() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            About Shaforms
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building excellence with dedication and expertise
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
                We are a team of dedicated and highly qualified Civil Engineers, passionate about transforming your vision into reality. With extensive experience in Residential, Commercial, and Infrastructure Projects, we combine expertise, innovation, and a commitment to quality to deliver exceptional results. Our work is guided by engineering precision, Industry best practices, and a deep understanding of site conditions, materials and construction methodologies.
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
        {/* BOARD MEMBERS */}
<div className="mb-20">
  <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
    Leadership Behind Shaforms
  </h2>

  <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
    Our leadership team brings together deep engineering expertise, strategic
    vision, and a strong commitment to excellence across every project.
  </p>
  

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 place-items-center">
    
    {[
      {
        name: 'Name Here',
        role: 'Position',
        bio: 'Civil Engineer with extensive experience in residential, commercial, and infrastructure projects. Known for strategic planning, execution excellence, and quality-driven leadership.',
        image: '/team/member1.png', // optional
      },
      {
        name: 'Name Here',
        role: 'Position',
        bio: 'Specialist in structural design, project coordination, and safety compliance with hands-on experience in complex construction environments.',
        image: '/team/member2.png',
      },
      {
        name: 'Name Here',
        role: 'Position',
        bio: 'Focused on delivery excellence, client coordination, and ensuring projects are completed on time with uncompromised quality.',
        image: '/team/member3.png',
      },
      {
        name: 'Name Here',
        role: 'Position',
        bio: 'Focused on delivery excellence, client coordination, and ensuring projects are completed on time with uncompromised quality.',
        image: '/team/member4.png',
      },
      {
        name: 'Name Here',
        role: 'Position',
        bio: 'Focused on delivery excellence, client coordination, and ensuring projects are completed on time with uncompromised quality.',
        image: '/team/member5.png',
      },
    ].map((member, index) => (
      <div
        key={index}
        className="group relative rounded-xl overflow-hidden shadow-lg bg-card text-centre p-5 transition-all hover:shadow-xl"
      >
        {/* IMAGE */}
        <div className="relative h-60 w-full overflow-hidden">
          
  <Image
    src={member.image}
    alt={member.name}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>


        {/* CONTENT */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-foreground">
            {member.name}
          </h3>
          <p className="text-secondary font-medium mb-3">
            {member.role}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
            {member.bio}
          </p>

          
          
        </div>
      </div>
    ))}
  </div>
</div>


        {/* CORE VALUES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Core Objectives
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {/* FIRST 4 CARDS */}
  {[
    {
      icon: Award,
      title: 'Sustainable Infrastructure',
      description:
        'Design and deliver infrastructure solutions that are environmentally responsible, resource-efficient, and built for long-term performance.',
    },
    {
      icon: Users,
      title: 'Resilient & Inclusive Development',
      description:
        'Support projects that are resilient, inclusive, and adaptable—serving communities, stakeholders, and future growth needs.',
    },
    {
      icon: Target,
      title: 'Safety & Quality Excellence',
      description:
        'Maintain uncompromising standards in safety, quality control, and compliance across all stages of construction and consultancy.',
    },
    {
      icon: Eye,
      title: 'Digital Transformation Leadership',
      description:
        'Pioneer the adoption of digital tools, BIM, automation, and smart technologies in construction and consulting services.',
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

  {/* CENTERED LAST CARD */}
  <div className="lg:col-span-4 flex justify-center">
    <div className="max-w-sm w-full">
      <Card className="border-0 shadow-lg text-center group hover:shadow-xl transition-all bg-card">
        <CardContent className="p-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary transition-colors">
            <Handshake className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Long-Term Partnerships & Thought Leadership
          </h3>
          <p className="text-muted-foreground text-sm">
            Build enduring client relationships through trust, expertise, and leadership that drives industry best practices.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>

</div>

        {/* WHY WORK WITH US */}
        <Card className="border-0 shadow-lg bg-primary text-secondary-foreground mt-12">
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
</div>
  )}