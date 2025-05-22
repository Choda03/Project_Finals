import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('painting');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) {
    router.push('/login');
    return <div>Redirecting to login...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select an image file.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);
    formData.append('description', description);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || 'Upload failed.');
    } else {
      setSuccess('Image uploaded successfully!');
      setFile(null);
      setDescription('');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-xl">
      <h1 className="text-3xl font-bold text-center mb-4">Upload Your Artwork</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="block w-full border rounded p-2"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="block w-full border rounded p-2"
        >
          <option value="painting">Painting</option>
          <option value="photography">Photography</option>
          <option value="sculpture">Sculpture</option>
          <option value="digital-art">Digital Art</option>
          <option value="illustration">Illustration</option>
        </select>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description (optional)"
          className="block w-full border rounded p-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary/90"
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
      </form>
    </div>
  );
} 