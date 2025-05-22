import { notFound } from 'next/navigation';

const categories = [
  'painting',
  'photography',
  'sculpture',
  'digital-art',
  'illustration',
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  if (!categories.includes(category)) {
    notFound();
  }
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4 capitalize">{category.replace('-', ' ')}</h1>
      <p className="text-lg text-muted-foreground">Explore artworks in the {category.replace('-', ' ')} category.</p>
    </div>
  );
} 