'use client'

import { useState } from 'react'
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle,
  Linkedin,
} from 'lucide-react'
import { Handshake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type Leader = {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export default function AboutPage() {
  const [activeLeader, setActiveLeader] = useState<Leader | null>(null)

  const leaders: Leader[] = [
    {
      name: 'Er. K. Ashraf Ali (M.E, M.Sc.)',
      role: 'Chairman',
      bio: 'PhD (Scholar) Solid Waste Management, M.E in Environmental Engineering, B.E. in Civil Engineering, Diploma in Architectural Engineering, M.Sc. Applied Psychology. 28 Years Experience in Architectural & Civil Engineering. Founder of Solidago Designs Coimbatore. State PRO & Zone Malabar Chairman, Integrated Civil Engineers Council (ICEC) State Vice President, Environmental Engineers Society (EES). Chairman EHAB Sustainable Solutions, Palakkad.',
      image: '/team/member1.png',
    },
    {
      name: 'Er. Shinoj. P.S',
      role: 'CEO',
      bio: 'PhD (Scholar) in Advanced Concrete Technology, M.E in Structural Engineering. Principal Structural Consultant, Diseno Structurals Pvt. Ltd. Calicut. 15 years experience in Civil Engineering field with area of expertise in both structural as well as architectural designing. ICEC former State Chairman. 2022-25. Executive member of Structural Engineers Association of Kozhikode (SEAK).',
      image: '/team/member2.png',
    },
    {
      name: 'Mr. Shebeer T K',
      role: 'Project Manager',
      bio: 'Experienced Civil Engineer with an educational background of Diploma in Civil Engineering, am expertise in Project planning, designing, managing and team coordination and in K-Smart building permit approval. I m also working associated to SOLIDAGO DESIGNS, Perinthalmanna..',
      image: '/team/member4.png',
    },
    {
      name: 'Er. Mohamed Hisham',
      role: 'Technical Director',
      bio: `Civil Engineer & Sustainability Expert with a Bachelor's degree from APJ Abdul Kalam Technological University (KTU) and a Master's degree in Environmental Engineering from Anna University. Currently pursuing MBA from VELS University, Chennai. Associated with SOLIDAGO DESIGNS and an active member of ICEC.`,
      image: '/team/member5.png',
    },
    
  ]

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Shaforms
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building excellence with dedication and expertise
          </p>
        </div>

        {/* WHO WE ARE */}
        <Card className="border-0 shadow-lg mb-16">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are a team of dedicated and highly qualified Civil Engineers, passionate about transforming your vision into reality. With extensive experience in Residential, Commercial, and Infrastructure Projects, we combine expertise, innovation, and a commitment to quality to deliver exceptional results. Our work is guided by engineering precision, Industry best practices, and a deep understanding of site conditions, materials and construction methodologies.
            </p>
          </CardContent>
        </Card>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: Eye,
              title: 'Our Vision',
              text:
                'We are committed to be the trusted leader in construction, recognized for excellence in safety, sustainability and client satisfaction, shaping resilient built environments for future generations.',
            },
            {
              icon: Target,
              title: 'Our Mission',
              text:
                'Our mission is to deliver safe, sustainable and high quality infrastructure solutions on time, while fostering integrity, innovation and teamwork for clients, employees and communities.',
            },
          ].map((item, i) => (
            <Card key={i} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <item.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* BOARD MEMBERS */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            Leadership Behind Shaforms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our leadership team brings together deep engineering expertise, strategic vision, and a strong commitment to excellence across every project.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <Card
                key={i}
                onClick={() => setActiveLeader(leader)}
                className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{leader.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {leader.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {activeLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveLeader(null)}
            />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-8 z-50">
              <button
                onClick={() => setActiveLeader(null)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex justify-center">
                  <Image
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold">
                    {activeLeader.name}
                  </h3>
                  <p className="text-Secondary font-medium mb-4">
                    {activeLeader.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {activeLeader.bio}
                  </p>

                  {activeLeader.linkedin && (
                    <a
                      href={activeLeader.linkedin}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-primary font-semibold"
                    >
                      <Linkedin size={18} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* CORE VALUES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Sustainable Infrastructure',
                description: 'Design and deliver infrastructure solutions that are environmentally responsible, resource-efficient, and built for long-term performance.',
              },
              {
                icon: Users,
                title: 'Resilient & Inclusive Development',
                description: 'Support projects that are resilient, inclusive, and adaptable—serving communities, stakeholders, and future growth needs.',
              },
              {
                icon: Target,
                title: 'Safety & Quality Excellence',
                description: 'Maintain uncompromising standards in safety, quality control, and compliance across all stages of construction and consultancy.',
              },
              {
                icon: Eye,
                title: 'Digital Transformation Leadership',
                description: 'Pioneer the adoption of digital tools, BIM, automation, and smart technologies in construction and consulting services.',
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
        <div className="lg:col-span-4 flex justify-center">
  <div className="max-w-sm w-full">
    <Card className="border-0 shadow-lg text-center group hover:shadow-xl transition-all bg-card">
      <CardContent className="p-6">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
          <Handshake className="h-7 w-7 text-secondary" />
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


        {/* WHY WORK WITH US */}
        <Card className="border-0 shadow-lg bg-primary text-white mt-20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Work With Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              {[
                'Experienced team of professionals',
                'Quality materials and craftsmanship',
                'Timely project completion',
                'Transparent communication',
                'After-sales support',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={18} />
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
