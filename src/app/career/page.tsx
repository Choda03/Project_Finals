import { Metadata } from 'next'
import { Briefcase, Users, Rocket, Heart, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Gallery Hub',
  description: 'Join our team and help shape the future of art sharing.',
}

export default function CareerPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-muted-foreground">
            Help us build the future of art sharing and discovery.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Open Positions</h2>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Senior Frontend Developer</h3>
                <p className="text-muted-foreground mb-4">
                  Help us build beautiful and performant user interfaces using Next.js and React.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">React</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">Next.js</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">TypeScript</span>
                </div>
                <Link 
                  href="/career/senior-frontend"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">UX/UI Designer</h3>
                <p className="text-muted-foreground mb-4">
                  Create intuitive and engaging user experiences for our art platform.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">Figma</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">UI Design</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">User Research</span>
                </div>
                <Link 
                  href="/career/ux-designer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Backend Developer</h3>
                <p className="text-muted-foreground mb-4">
                  Build scalable and secure backend services for our platform.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">Node.js</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">MongoDB</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">AWS</span>
                </div>
                <Link 
                  href="/career/backend-developer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Why Join Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Work on cutting-edge technology and shape the future of art sharing.
                </p>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Growth</h3>
                <p className="text-muted-foreground">
                  Continuous learning opportunities and career development.
                </p>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Culture</h3>
                <p className="text-muted-foreground">
                  Join a diverse and inclusive team of passionate individuals.
                </p>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Benefits</h3>
                <p className="text-muted-foreground">
                  Competitive compensation, flexible hours, and remote work options.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Our Team</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We're a diverse team of art enthusiasts, technologists, and creative professionals working together to build the future of art sharing and discovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Building innovative solutions for artists and art lovers
                </p>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating beautiful and intuitive user experiences
                </p>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Product</h3>
                <p className="text-sm text-muted-foreground">
                  Shaping the future of art sharing and discovery
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Life at Gallery Hub</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We believe in creating a supportive and inclusive environment where everyone can thrive. Here's what makes working at Gallery Hub special:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Flexible work arrangements
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Regular team events and activities
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Professional development opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Health and wellness benefits
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 