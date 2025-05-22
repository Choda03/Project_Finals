import { Metadata } from 'next'
import { TrendingUp, Flame, Star, Heart, ArrowUp, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trending - Gallery Hub',
  description: 'Discover trending artworks and artists on Gallery Hub.',
}

export default function TrendingPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Trending Now</h1>
          <p className="text-lg text-muted-foreground">
            Explore what's popular in the art world this week.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Hot Right Now</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-md border">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Trending Up</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Abstract Expressionism</h3>
                <p className="text-muted-foreground">
                  Contemporary artists redefining abstract art with bold expressions.
                </p>
                <Link 
                  href="/explore/abstract"
                  className="inline-block mt-4 text-primary hover:underline"
                >
                  Explore Collection →
                </Link>
              </div>

              <div className="p-4 rounded-md border">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Community Favorite</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Digital Portraits</h3>
                <p className="text-muted-foreground">
                  Modern takes on traditional portraiture gaining popularity.
                </p>
                <Link 
                  href="/explore/portraits"
                  className="inline-block mt-4 text-primary hover:underline"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Featured Artists</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Contemporary Painter
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>2.5k followers</span>
                </div>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Marcus Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Digital Artist
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>1.8k followers</span>
                </div>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Emma Thompson</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Mixed Media Artist
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>1.2k followers</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Trending Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/explore/digital-art"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Digital Art</h3>
                <p className="text-sm text-muted-foreground">
                  Innovative digital creations and illustrations
                </p>
              </Link>

              <Link 
                href="/explore/photography"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Photography</h3>
                <p className="text-sm text-muted-foreground">
                  Capturing moments and stories through lens
                </p>
              </Link>

              <Link 
                href="/explore/sculpture"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Sculpture</h3>
                <p className="text-sm text-muted-foreground">
                  Three-dimensional artworks and installations
                </p>
              </Link>

              <Link 
                href="/explore/paintings"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Paintings</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional and contemporary paintings
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 