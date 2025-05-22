import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ImageModel from '@/models/Image';
import UserModel from '@/models/User';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../auth/[...nextauth]/route';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }
  const user = await UserModel.findOne({ email: session.user.email });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  const image = await ImageModel.findById(params.id);
  if (!image) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }
  const liked = image.likes.includes(user._id);
  if (liked) {
    image.likes.pull(user._id);
    await image.save();
    return NextResponse.json({ liked: false });
  } else {
    image.likes.push(user._id);
    await image.save();
    return NextResponse.json({ liked: true });
  }
} 