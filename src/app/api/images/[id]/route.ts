import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ImageModel from '@/models/Image';
import UserModel from '@/models/User';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const image = await ImageModel.findById(params.id)
    .populate('uploadedBy', 'name email image')
    .populate('comments.user', 'name image');
  if (!image) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }
  return NextResponse.json(image);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }
  const user = await UserModel.findOne({ email: session.user.email });
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Admin only' }, { status: 403 });
  }
  await ImageModel.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
} 