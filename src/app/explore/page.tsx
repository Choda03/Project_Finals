import { Metadata } from 'next'
import { Search, Palette, Camera, Sparkles, TrendingUp, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Explore - Gallery Hub',
  description: 'Discover and explore art on Gallery Hub.',
}

export default function ExplorePage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Art</h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing artwork from talented artists around the world.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Browse Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/explore/paintings"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-medium m-0">Paintings</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore traditional and digital paintings from contemporary artists.
                </p>
              </Link>

              <Link 
                href="/explore/photography"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-medium m-0">Photography</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover stunning photographs capturing moments and stories.
                </p>
              </Link>

              <Link 
                href="/explore/digital-art"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-medium m-0">Digital Art</h3>
                </div>
                <p className="text-muted-foreground">
                  Experience innovative digital creations and illustrations.
                </p>
              </Link>

              <Link 
                href="/explore/sculptures"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-medium m-0">Sculptures</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore three-dimensional artworks and installations.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Trending Now</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Check out what's popular in our community right now:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Abstract Art</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring new dimensions in contemporary abstract works
                </p>
              </div>
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Nature Photography</h3>
                <p className="text-sm text-muted-foreground">
                  Capturing the beauty of the natural world
                </p>
              </div>
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Digital Portraits</h3>
                <p className="text-sm text-muted-foreground">
                  Modern takes on traditional portraiture
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Featured Artists</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Meet some of our talented community members:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Sarah Chen</h3>
                <p className="text-muted-foreground mb-2">
                  Contemporary painter exploring themes of identity and culture
                </p>
                <Link 
                  href="/artists/sarah-chen"
                  className="text-primary hover:underline"
                >
                  View Profile →
                </Link>
              </div>
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Marcus Rodriguez</h3>
                <p className="text-muted-foreground mb-2">
                  Digital artist specializing in surreal landscapes
                </p>
                <Link 
                  href="/artists/marcus-rodriguez"
                  className="text-primary hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Get Started</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Ready to explore more? Here's how you can get involved:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Create an account to save your favorite artworks
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Follow artists you love to see their latest work
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Share your own artwork with our community
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Join discussions and connect with other art enthusiasts
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 