import Link from 'next/link';

const categories = [
  { name: 'Painting', slug: 'painting' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Sculpture', slug: 'sculpture' },
  { name: 'Digital Art', slug: 'digital-art' },
  { name: 'Illustration', slug: 'illustration' },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Categories</h1>
      <p className="text-lg text-muted-foreground mb-8">Explore artwork categories.</p>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="px-6 py-3 rounded-lg bg-secondary text-foreground text-lg font-semibold shadow hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
} 