import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import ImageModel from '@/models/Image';
import UserModel from '@/models/User';
import { z } from 'zod';
import { getAuth } from '@clerk/nextjs/server';

// Simple in-memory rate limiter (per IP, per minute)
const rateLimitMap = new Map();
const RATE_LIMIT = 10; // max 10 uploads per minute per IP

const UploadSchema = z.object({
  category: z.string().min(2),
  description: z.string().max(500).optional(),
});

interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = session.user as SessionUser;
    const formData = await req.formData();
    const file = formData.get('image') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;

    if (!file || !title || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const filename = `${uniqueSuffix}-${file.name}`;
    const path = join(process.cwd(), 'public/uploads', filename);

    // Save file
    await writeFile(path, buffer);

    // Save to database
    await dbConnect();
    const imageDoc = await ImageModel.create({
      title,
      description,
      category,
      url: `/uploads/${filename}`,
      author: user.id,
      createdAt: new Date(),
    });

    return NextResponse.json(imageDoc, { status: 201 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
} 