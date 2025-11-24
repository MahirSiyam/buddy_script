// import { NextRequest, NextResponse } from 'next/server';
// import { connectToDatabase } from '@/lib/mongodb';
// import { Post } from '@/models/Post';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { ObjectId } from 'mongodb'; // Import ObjectId

// export async function POST(request: NextRequest) {
//   try {
//     const session = await getServerSession(authOptions);
    
//     if (!session?.user?.id) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       );
//     }

//     const { content, images } = await request.json();

//     if (!content?.trim() && (!images || images.length === 0)) {
//       return NextResponse.json(
//         { error: 'Post content or images are required' },
//         { status: 400 }
//       );
//     }

//     const { db } = await connectToDatabase();

//     const newPost: Post = {
//       userId: new ObjectId(session.user.id), // Now ObjectId is available
//       userFirstName: session.user.firstName || 'User',
//       userLastName: session.user.lastName || '',
//       userImage: session.user.image || null,
//       content: content?.trim() || '',
//       images: images || [],
//       likes: [],
//       comments: [],
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     const result = await db.collection<Post>('posts').insertOne(newPost);

//     return NextResponse.json(
//       {
//         message: 'Post created successfully',
//         post: { ...newPost, _id: result.insertedId }
//       },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error('Create post error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const { db } = await connectToDatabase();
//     const { searchParams } = new URL(request.url);
//     const limit = parseInt(searchParams.get('limit') || '10');
//     const page = parseInt(searchParams.get('page') || '1');

//     const posts = await db.collection<Post>('posts')
//       .find()
//       .sort({ createdAt: -1 }) // Newest first
//       .limit(limit)
//       .skip((page - 1) * limit)
//       .toArray();

//     return NextResponse.json({ posts });

//   } catch (error) {
//     console.error('Get posts error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }












// import { NextRequest, NextResponse } from 'next/server';
// import { connectToDatabase } from '@/lib/mongodb';
// import { Post } from '@/models/Post';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { ObjectId } from 'mongodb';

// export async function POST(request: NextRequest) {
//   try {
//     const session = await getServerSession(authOptions);
    
//     if (!session?.user?.id) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       );
//     }

//     const { content, images, privacy = 'public' } = await request.json();

//     if (!content?.trim() && (!images || images.length === 0)) {
//       return NextResponse.json(
//         { error: 'Post content or images are required' },
//         { status: 400 }
//       );
//     }

//     const { db } = await connectToDatabase();

//     const newPost: Post = {
//       userId: new ObjectId(session.user.id),
//       userFirstName: session.user.firstName || 'User',
//       userLastName: session.user.lastName || '',
//       userImage: session.user.image || null,
//       content: content?.trim() || '',
//       images: images || [],
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     const result = await db.collection<Post>('posts').insertOne(newPost);

//     return NextResponse.json(
//       {
//         message: 'Post created successfully',
//         post: { ...newPost, _id: result.insertedId }
//       },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error('Create post error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const session = await getServerSession(authOptions);
//     const { db } = await connectToDatabase();
//     const { searchParams } = new URL(request.url);
//     const limit = parseInt(searchParams.get('limit') || '10');
//     const page = parseInt(searchParams.get('page') || '1');

//     // Build query based on user authentication and privacy
//     let query = {};
    
//     if (!session?.user?.id) {
//       // For non-authenticated users, only show public posts
//       query = { privacy: 'public' };
//     } else {
//       // For authenticated users, show public posts and their own private posts
//       query = {
//         $or: [
//           { privacy: 'public' },
//           { 
//             privacy: 'private', 
//             userId: new ObjectId(session.user.id) 
//           }
//         ]
//       };
//     }

//     const posts = await db.collection<Post>('posts')
//       .find(query)
//       .sort({ createdAt: -1 }) // Newest first
//       .limit(limit)
//       .skip((page - 1) * limit)
//       .toArray();

//     return NextResponse.json({ posts });

//   } catch (error) {
//     console.error('Get posts error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

















import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { content, images, privacy = 'public' } = await request.json();

    if (!content?.trim() && (!images || images.length === 0)) {
      return NextResponse.json(
        { error: 'Post content or images are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const newPost: Post = {
      userId: new ObjectId(session.user.id),
      userFirstName: session.user.firstName || 'User',
      userLastName: session.user.lastName || '',
      userImage: session.user.image || null,
      content: content?.trim() || '',
      images: images || [],
      likes: [], // Add empty likes array
      comments: [], // Add empty comments array
      privacy: privacy, // Add privacy field
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection<Post>('posts').insertOne(newPost);

    return NextResponse.json(
      {
        message: 'Post created successfully',
        post: { ...newPost, _id: result.insertedId }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Create post error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    // Build query based on user authentication and privacy
    let query = {};
    
    if (!session?.user?.id) {
      // For non-authenticated users, only show public posts
      query = { privacy: 'public' };
    } else {
      // For authenticated users, show public posts and their own private posts
      query = {
        $or: [
          { privacy: 'public' },
          { 
            privacy: 'private', 
            userId: new ObjectId(session.user.id) 
          }
        ]
      };
    }

    const posts = await db.collection<Post>('posts')
      .find(query)
      .sort({ createdAt: -1 }) // Newest first
      .limit(limit)
      .skip((page - 1) * limit)
      .toArray();

    return NextResponse.json({ posts });

  } catch (error) {
    console.error('Get posts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
























