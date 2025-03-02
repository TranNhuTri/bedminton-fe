'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

import { IconHome } from '@/components/Icon';
import { SelectLocale } from '@/components/Select';
import { HREF } from '@/configs';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AuthLayout({ children }: Props) {
  const t = useTranslations('Auth');
  const router = useRouter();

  return (
    <div className='bg-primary-25 flex h-screen'>
      <div className='flex-1 p-6'>
        <Image
          className='h-full w-full rounded-[32px] object-cover'
          src='/assets/images/auth-image.jpg'
          alt='Badminton Hub'
          width={4160}
          height={6240}
        />
      </div>
      <div className='flex max-h-screen flex-1 flex-col overflow-y-auto p-6'>
        <div className='flex justify-between'>
          <Button
            variant='text'
            color='secondary'
            className='flex items-center gap-2'
            onClick={() => router.push(HREF.HOME)}
          >
            <IconHome />
            <span>{t('back-to-home')}</span>
          </Button>
          <SelectLocale />
        </div>
        {children}
      </div>
    </div>
  );
}
