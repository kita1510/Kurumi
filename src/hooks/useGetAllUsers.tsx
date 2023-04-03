import { useQuery } from '@tanstack/react-query';
import React from 'react';
import supabase from '~/lib/supabase';

const useGetAllUsers = () => {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await supabase.from('User').select('*, Profiles(Avatar)');
      return data;
    },
  });
  return users;
};

export default useGetAllUsers;
