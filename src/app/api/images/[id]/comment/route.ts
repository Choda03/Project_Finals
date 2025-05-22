import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ImageModel from '@/models/Image';
import UserModel from '@/models/User';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { z } from 'zod';

// Simple in-memory rate limiter (per IP, per minute)
const rateLimitMap = new Map();
const RATE_LIMIT = 20; // max 20 comments per minute per IP

const CommentSchema = z.object({
  text: z.string().min(1, 'Comment cannot be empty').max(500, 'Comment too long'),
});

export async function POST(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();
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
    return NextResponse.json({ error: 'Too many comments, slow down.' }, { status: 429 });
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }
  const user = await UserModel.findOne({ email: session.user.email });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  const body = await request.json();
  const parse = CommentSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json({ error: parse.error.errors[0].message }, { status: 400 });
  }
  const { text } = parse.data;
  const image = await ImageModel.findById(params.id);
  if (!image) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }
  if (!image.comments) image.comments = [];
  image.comments.push({ user: user._id, text, createdAt: new Date() });
  await image.save();
  return NextResponse.json({ success: true });
} 