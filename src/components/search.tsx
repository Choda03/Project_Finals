'use client'

import * as React from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Search({ className, ...props }: SearchProps) {
  const router = useRouter()
  const [query, setQuery] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
    }
  }

  return (
    <form onSubmit={handleSearch} className={cn('relative', className)}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search artwork..."
          className="w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          {...props}
        />
      </div>
      {isOpen && query && (
        <div className="absolute top-full mt-1 w-full rounded-md border bg-popover p-2 shadow-md">
          <div className="text-sm text-muted-foreground">
            Press enter to search for "{query}"
          </div>
        </div>
      )}
    </form>
  )
} 