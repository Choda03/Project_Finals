import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Gallery Hub</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="lead">
            Welcome to Gallery Hub, your premier digital art gallery platform where artists and art enthusiasts come together to celebrate creativity and visual expression.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Gallery Hub, we believe that art should be accessible to everyone. Our mission is to create a vibrant, inclusive community where artists can showcase their work and art lovers can discover new perspectives and inspiration.
          </p>

          <div className="my-12 relative aspect-video">
            <Image
              src="/about-gallery.jpg"
              alt="Gallery Hub Exhibition"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <h2>What We Offer</h2>
          <ul>
            <li>A diverse collection of artwork across multiple categories</li>
            <li>Direct connection between artists and art enthusiasts</li>
            <li>Regular virtual exhibitions and events</li>
            <li>Secure and easy-to-use platform for artists to showcase their work</li>
            <li>Community features for sharing and discussing art</li>
          </ul>

          <h2>Join Our Community</h2>
          <p>
            Whether you're an artist looking to share your work or an art enthusiast seeking inspiration, Gallery Hub is the perfect place for you. Join our growing community and be part of the digital art revolution.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 