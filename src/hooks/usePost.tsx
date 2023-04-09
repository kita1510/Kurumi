import { useQuery } from '@tanstack/react-query';
import client from '~/configs/client';
import { Author, CategoriesOnPosts, Post, Comment } from '~/types';

export type PostInfo = Post & {
  author: Author;
  comment: Comment[];
  categories: CategoriesOnPosts[];
};

const usePost = (postId: number) => {
  const { data: posts } = useQuery<PostInfo>({
    queryKey: ['post'],
    queryFn: async () => {
      const data = await client.get(`/api/posts/${postId}`);
      return data?.data;
    },
  });

  return posts;
};

export default usePost;
