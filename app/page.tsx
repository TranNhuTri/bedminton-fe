'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { HREF } from '@/configs';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = true;

    if (isAuthenticated) {
      router.replace(HREF.HOME);
    } else {
      router.replace(HREF.LOGIN);
    }
  }, [router]);

  return null;
}
