import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext, AuthProps } from '~/contexts/AuthContext';
import supabase from '~/lib/supabase';
import { Profile } from '~/types';
import { PostgrestBuilder, PostgrestFilterBuilder } from '@supabase/postgrest-js';

const useProfile = () => {
  const { user } = useContext<AuthProps>(AuthContext);

  const { data: userProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const profile = await supabase.from('Profile').select('*').eq('userId', user?.id).single();
      return profile?.data;
    },
  });
  return userProfile;
};

export default useProfile;
