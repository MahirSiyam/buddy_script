import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Post, Like } from '@/models/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { db } = await connectToDatabase();
    const postId = new ObjectId(params.id);
    const userId = new ObjectId(session.user.id);

    // Find the post first
    const post = await db.collection<Post>('posts').findOne({ _id: postId });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Check if user already liked the post
    const existingLikeIndex = post.likes.findIndex(
      (like: Like) => like.userId.toString() === session.user.id
    );

    let updatedLikes: Like[];

    if (existingLikeIndex > -1) {
      // Unlike: remove the like
      updatedLikes = post.likes.filter(
        (like: Like) => like.userId.toString() !== session.user.id
      );
    } else {
      // Like: add new like
      const newLike: Like = {
        userId: userId,
        userFirstName: session.user.firstName || 'User',
        userLastName: session.user.lastName || '',
        userImage: session.user.image || null,
        createdAt: new Date(),
      };
      updatedLikes = [...post.likes, newLike];
    }

    // Update the post
    await db.collection<Post>('posts').updateOne(
      { _id: postId },
      { $set: { likes: updatedLikes } }
    );

    return NextResponse.json({ 
      message: existingLikeIndex > -1 ? 'Post unliked' : 'Post liked',
      likes: updatedLikes 
    });

  } catch (error) {
    console.error('Like post error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}