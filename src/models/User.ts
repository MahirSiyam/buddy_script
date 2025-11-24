// import { ObjectId } from 'mongodb';

// export interface User {
//   _id?: ObjectId;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   emailVerified?: Date;
//   image?: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface UserWithoutPassword {
//   _id?: ObjectId;
//   firstName: string;
//   lastName: string;
//   email: string;
//   emailVerified?: Date;
//   image?: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }














// import { ObjectId } from 'mongodb';

// export interface User {
//   _id?: ObjectId;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   emailVerified?: Date;
//   image?: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface UserWithoutPassword {
//   _id?: ObjectId;
//   firstName: string;
//   lastName: string;
//   email: string;
//   emailVerified?: Date;
//   image?: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }












import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithoutPassword {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OTP {
  _id?: ObjectId;
  email: string;
  expiresAt: Date;
  createdAt: Date;
}