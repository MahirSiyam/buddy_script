// import { ObjectId } from 'mongodb';

// export interface Post {
//   _id?: ObjectId;
//   userId: ObjectId;
//   userFirstName: string;
//   userLastName: string;
//   email: string;
//   userImage?: string | null;
//   content: string;
//   images: string[]; // Array of image URLs
//   likes: ObjectId[]; // Array of user IDs who liked the post
//   comments: Comment[];
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface Comment {
//   _id?: ObjectId;
//   userId: ObjectId;
//   userFirstName: string;
//   userLastName: string;
//   email: string;
//   userImage?: string | null;
//   content: string;
//   createdAt: Date;
// }










import { ObjectId } from 'mongodb';

export interface Post {
  _id?: ObjectId;
  userId: ObjectId;
  userFirstName: string;
  userLastName: string;
  userImage?: string | null;
  content: string;
  images: string[];
  likes: Like[];
  comments: Comment[];
  privacy: 'public' | 'private';
  createdAt: Date;
  updatedAt: Date;
}

export interface Like {
  userId: ObjectId;
  userFirstName: string;
  userLastName: string;
  userImage?: string | null;
  createdAt: Date;
}

export interface Comment {
  _id?: ObjectId;
  userId: ObjectId;
  userFirstName: string;
  userLastName: string;
  userImage?: string | null;
  content: string;
  likes: Like[];
  replies: Reply[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Reply {
  _id?: ObjectId;
  userId: ObjectId;
  userFirstName: string;
  userLastName: string;
  userImage?: string | null;
  content: string;
  likes: Like[];
  createdAt: Date;
}

export interface PostView {
  _id?: ObjectId;
  postId: ObjectId;
  userId: ObjectId;
  userFirstName: string;
  userLastName: string;
  userImage?: string | null;
  viewedAt: Date;
}








// // models/Post.ts
// import { ObjectId } from 'mongodb';

// export interface Post {
//   _id?: ObjectId;
//   userId: ObjectId;
//   userFirstName: string;
//   userLastName: string;
//   userImage?: string | null;
//   content: string;
//   images: string[];
//   likes: Like[];
//   comments: Comment[];
//   privacy: 'public' | 'private';
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface Like {
//   userId: ObjectId;
//   userFirstName: string;
//   userLastName: string;
//   userImage?: string | null;
//   createdAt: Date;
// }

// export interface Comment {
//   _id?: ObjectId;
//   userId: ObjectId;
//   userFirstName: string;
//   userLastName: string;
//   userImage?: string | null;
//   content: string;
//   likes: Like[];
//   replies: Reply[];
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface Reply {
//   _id?: ObjectId;
//   userId: ObjectId;
//   userFirstName: string;
//   userLastName: string;
//   userImage?: string | null;
//   content: string;
//   likes: Like[];
//   createdAt: Date;
// }