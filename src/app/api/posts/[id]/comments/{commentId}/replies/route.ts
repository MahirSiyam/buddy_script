import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Post, Reply } from '@/models/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; commentId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { content } = await request.json();

    if (!content?.trim()) {
      return NextResponse.json({ error: 'Reply content is required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    const newReply: Reply = {
      _id: new ObjectId(),
      userId: new ObjectId(session.user.id),
      userFirstName: session.user.firstName || 'User',
      userLastName: session.user.lastName || '',
      userImage: session.user.image || null,
      content: content.trim(),
      likes: [],
      createdAt: new Date(),
    };

    await db.collection<Post>('posts').updateOne(
      { 
        _id: new ObjectId(params.id),
        'comments._id': new ObjectId(params.commentId)
      },
      { 
        $push: { 
          'comments.$.replies': newReply 
        },
        $set: {
          'comments.$.updatedAt': new Date()
        }
      }
    );

    return NextResponse.json({ message: 'Reply added', reply: newReply });

  } catch (error) {
    console.error('Add reply error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}