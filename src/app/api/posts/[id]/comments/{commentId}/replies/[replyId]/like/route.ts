import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Post, Like } from '@/models/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; commentId: string; replyId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { db } = await connectToDatabase();
    const postId = new ObjectId(params.id);
    const commentId = new ObjectId(params.commentId);
    const replyId = new ObjectId(params.replyId);
    const userId = new ObjectId(session.user.id);

    // Find the post
    const post = await db.collection<Post>('posts').findOne({ _id: postId });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Find the comment
    const comment = post.comments.find(
      (c: any) => c._id.toString() === params.commentId
    );

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    // Find the reply
    const reply = comment.replies.find(
      (r: any) => r._id.toString() === params.replyId
    );

    if (!reply) {
      return NextResponse.json({ error: 'Reply not found' }, { status: 404 });
    }

    // Check if user already liked the reply
    const existingLikeIndex = reply.likes.findIndex(
      (like: Like) => like.userId.toString() === session.user.id
    );

    let updatedLikes: Like[];

    if (existingLikeIndex > -1) {
      // Unlike: remove the like
      updatedLikes = reply.likes.filter(
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
      updatedLikes = [...reply.likes, newLike];
    }

    // Update the reply likes in the post
    await db.collection<Post>('posts').updateOne(
      { 
        _id: postId,
        'comments._id': commentId,
        'comments.replies._id': replyId
      },
      { 
        $set: { 
          'comments.$[comment].replies.$[reply].likes': updatedLikes
        } 
      },
      {
        arrayFilters: [
          { 'comment._id': commentId },
          { 'reply._id': replyId }
        ]
      }
    );

    return NextResponse.json({ 
      message: existingLikeIndex > -1 ? 'Reply unliked' : 'Reply liked',
      likes: updatedLikes 
    });

  } catch (error) {
    console.error('Like reply error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}