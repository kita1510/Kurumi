export interface AuthUser {
  id: number;
  email: string;
  name: string;
  Role: string;
  accessToken: string;
}

export interface Profile {
  id: number;
  bio: string;
  userId: number;
  avatar: string;
  follower: number;
}

export interface Category {
  id: number;
  name: string;
}
