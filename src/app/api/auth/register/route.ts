import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import UserModel from '@/models/User';
import { z } from 'zod';

const RegisterSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Simple in-memory rate limiter (per IP, per minute)
const rateLimitMap = new Map();
const RATE_LIMIT = 5; // max 5 registrations per minute per IP

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'local';
    const now = Date.now();
    const windowMs = 60 * 1000;
    const entry = rateLimitMap.get(ip) || { count: 0, last: now };
    if (now - entry.last > windowMs) {
      entry.count = 0;
      entry.last = now;
    }
    entry.count++;
    rateLimitMap.set(ip, entry);
    if (entry.count > RATE_LIMIT) {
      return NextResponse.json({ error: 'Too many registrations, slow down.' }, { status: 429 });
    }

    const body = await request.json();
    const parse = RegisterSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json({ error: parse.error.errors[0].message }, { status: 400 });
    }
    const { name, email, password } = parse.data;
    await dbConnect();
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }
    const user = await UserModel.create({
      name,
      email,
      password,
      role: 'user',
      bio: '',
      uploads: [],
      favorites: [],
    });
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      role: user.role,
      bio: user.bio,
      joinedAt: user.joinedAt,
      uploads: user.uploads,
      favorites: user.favorites,
    };
    return NextResponse.json(userResponse);
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
} 