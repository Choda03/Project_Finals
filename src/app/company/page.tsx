import { Metadata } from 'next'
import { Building2, Users, Target, Heart, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Gallery Hub',
  description: 'Learn about Gallery Hub, our mission, and our team.',
}

export default function CompanyPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Gallery Hub</h1>
          <p className="text-lg text-muted-foreground">
            Empowering artists and art enthusiasts through innovative technology.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Our Story</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Gallery Hub was founded with a simple mission: to make art accessible to everyone. We believe that art has the power to inspire, connect, and transform lives. Our platform brings together artists and art lovers in a vibrant, supportive community.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Our Mission</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We're dedicated to:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Empowering artists to showcase their work globally
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Making art accessible to everyone
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Building a supportive creative community
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Promoting art education and appreciation
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Our Team</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We're a diverse team of art enthusiasts, technologists, and creative professionals working together to build the future of art sharing and discovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Leadership</h3>
                <p className="text-muted-foreground">
                  Experienced professionals guiding our vision and growth.
                </p>
              </div>
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Skilled engineers building innovative solutions.
                </p>
              </div>
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Creative minds crafting beautiful experiences.
                </p>
              </div>
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Dedicated team members supporting our users.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Our Values</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries to create better ways to share and experience art.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive environment where artists and art lovers can connect and grow.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe art should be accessible to everyone, everywhere.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Global Impact</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Gallery Hub has grown into a global community of artists and art enthusiasts. We're proud to support creators from around the world and help them share their work with a global audience.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Join Us</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Whether you're an artist looking to showcase your work, an art lover seeking inspiration, or someone passionate about supporting the arts, we invite you to join our community.
            </p>
            <p className="text-muted-foreground">
              Together, we can create a more vibrant and accessible art world.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 