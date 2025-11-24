// import NextAuth from 'next-auth';

// declare module 'next-auth' {
//   interface User {
//     firstName?: string;
//     lastName?: string;
//   }

//   interface Session {
//     user: {
//       id: string;
//       email?: string | null;
//       name?: string | null;
//       image?: string | null;
//       firstName?: string;
//       lastName?: string;
//     };
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     id?: string;
//     firstName?: string;
//     lastName?: string;
//   }
// }














import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    firstName?: string;
    lastName?: string;
    image?: string | null;
  }

  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      firstName?: string;
      lastName?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    firstName?: string;
    lastName?: string;
    image?: string | null; // Add this line
  }
}

