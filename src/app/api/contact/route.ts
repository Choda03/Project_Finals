import { NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Simple in-memory rate limiter (per IP, per minute)
const rateLimitMap = new Map()
const RATE_LIMIT = 5 // max 5 messages per minute per IP

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'local'
    const now = Date.now()
    const windowMs = 60 * 1000
    const entry = rateLimitMap.get(ip) || { count: 0, last: now }
    if (now - entry.last > windowMs) {
      entry.count = 0
      entry.last = now
    }
    entry.count++
    rateLimitMap.set(ip, entry)
    if (entry.count > RATE_LIMIT) {
      return NextResponse.json(
        { error: 'Too many messages, please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const parse = ContactSchema.safeParse(body)
    
    if (!parse.success) {
      return NextResponse.json(
        { error: parse.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, message } = parse.data

    // Here you would typically:
    // 1. Send an email to your support team
    // 2. Store the message in a database
    // 3. Set up notifications
    // For now, we'll just log it
    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 