'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return null
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto py-16 max-w-4xl">
      <div className="bg-card rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-6 mb-8">
          {session.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || 'Profile picture'}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl text-primary">
                {session.user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold">{session.user?.name}</h1>
            <p className="text-muted-foreground">{session.user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Account Information</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Role:</span>{' '}
                <span className="capitalize">{session.user?.role || 'User'}</span>
              </p>
              <p>
                <span className="font-medium">Member since:</span>{' '}
                {new Date(session.user?.joinedAt || Date.now()).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Activity</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Uploads:</span>{' '}
                {session.user?.uploads?.length || 0} images
              </p>
              <p>
                <span className="font-medium">Favorites:</span>{' '}
                {session.user?.favorites?.length || 0} images
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 