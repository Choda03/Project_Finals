'use client'

import * as React from 'react'
import Link from 'next/link'
import { User, LogOut, Settings, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSession, signOut } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'

interface UserMenuProps {
  className?: string
}

export function UserMenu({ className }: UserMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      await signOut({ redirect: false })
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return null
  }

  if (!session) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn('flex items-center space-x-4', className)}
      >
        <Link
          href="/login"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Sign up
        </Link>
      </motion.div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-full border p-2 hover:bg-accent"
      >
        {session.user?.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || 'User avatar'}
            className="h-6 w-6 rounded-full"
          />
        ) : (
          <User className="h-6 w-6" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md border bg-popover py-1 shadow-md"
          >
            <div className="px-4 py-2">
              <p className="text-sm font-medium">{session.user?.name || 'User'}</p>
              <p className="text-xs text-muted-foreground">{session.user?.email}</p>
            </div>
            <div className="border-t" />
            <Link
              href="/profile"
              className="flex items-center px-4 py-2 text-sm hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
            <Link
              href="/favorites"
              className="flex items-center px-4 py-2 text-sm hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </Link>
            <Link
              href="/settings"
              className="flex items-center px-4 py-2 text-sm hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
            <div className="border-t" />
            <motion.button
              whileHover={{ backgroundColor: 'hsl(var(--accent))' }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              disabled={isLoading}
              className="flex w-full items-center px-4 py-2 text-sm text-destructive hover:bg-accent disabled:opacity-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              {isLoading ? 'Logging out...' : 'Log out'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 