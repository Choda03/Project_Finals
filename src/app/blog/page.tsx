import { Metadata } from 'next'
import { BookOpen, Calendar, User, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Gallery Hub',
  description: 'Latest news, articles, and insights from the art world.',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Art Blog</h1>
          <p className="text-lg text-muted-foreground">
            Discover insights, trends, and stories from the art world.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Featured Articles</h2>
            </div>
            <div className="space-y-8">
              <article className="p-4 rounded-md border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2024</span>
                  <span>•</span>
                  <User className="h-4 w-4" />
                  <span>By Sarah Chen</span>
                </div>
                <h3 className="text-xl font-medium mb-2">The Evolution of Digital Art in 2024</h3>
                <p className="text-muted-foreground mb-4">
                  Exploring how technology is reshaping the art world and creating new opportunities for artists.
                </p>
                <Link 
                  href="/blog/digital-art-evolution"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              <article className="p-4 rounded-md border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 10, 2024</span>
                  <span>•</span>
                  <User className="h-4 w-4" />
                  <span>By Marcus Rodriguez</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Art Collecting in the Digital Age</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to building and managing your digital art collection.
                </p>
                <Link 
                  href="/blog/digital-art-collecting"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/blog/art-trends"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Art Trends</h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated with the latest trends in the art world
                </p>
              </Link>

              <Link 
                href="/blog/artist-interviews"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Artist Interviews</h3>
                <p className="text-sm text-muted-foreground">
                  Exclusive conversations with talented artists
                </p>
              </Link>

              <Link 
                href="/blog/art-tutorials"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Art Tutorials</h3>
                <p className="text-sm text-muted-foreground">
                  Learn new techniques and improve your skills
                </p>
              </Link>

              <Link 
                href="/blog/exhibition-reviews"
                className="p-4 rounded-md border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Exhibition Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  In-depth reviews of art exhibitions and shows
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Latest Posts</h2>
            </div>
            <div className="space-y-6">
              <article className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">The Impact of AI on Contemporary Art</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  March 5, 2024 • 5 min read
                </p>
                <p className="text-muted-foreground">
                  Exploring how artificial intelligence is transforming the creative process and art production.
                </p>
              </article>

              <article className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">Sustainable Art Practices</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  March 1, 2024 • 4 min read
                </p>
                <p className="text-muted-foreground">
                  How artists are embracing eco-friendly materials and sustainable practices.
                </p>
              </article>

              <article className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">The Rise of NFT Art</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  February 28, 2024 • 6 min read
                </p>
                <p className="text-muted-foreground">
                  Understanding the intersection of blockchain technology and digital art.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 