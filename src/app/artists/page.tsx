import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dbConnect from '@/lib/mongodb'
import UserModel from '@/models/User'
import { Types } from 'mongoose'

interface Artist {
  _id: Types.ObjectId
  name: string
  email: string
  image?: string
  bio?: string
  uploads?: Array<{
    _id: Types.ObjectId
    url: string
    title: string
  }>
}

async function getArtists() {
  await dbConnect()
  const artists = await UserModel.find({ role: 'artist' })
    .select('name email image bio uploads')
    .populate('uploads', 'url title')
    .lean()
  return artists as unknown as Artist[]
}

export default async function ArtistsPage() {
  const artists = await getArtists()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <Link
            key={artist._id.toString()}
            href={`/profile/${artist._id}`}
            className="group"
          >
            <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="relative aspect-square">
                <Image
                  src={artist.image || '/default-avatar.png'}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{artist.name}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {artist.bio || 'No bio available'}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{artist.uploads?.length || 0} artworks</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 