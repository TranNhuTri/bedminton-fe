'use client';

import Image from 'next/image';
import Link from 'next/link';
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
      <div className='relative flex-1 p-6'>
        <Image
          className='h-full w-full rounded-[32px] object-cover'
          src='/assets/images/auth-image.jpg'
          alt='Badminton Hub'
          width={4160}
          height={6240}
        />
        <Link
          href={HREF.HOME}
          className='absolute top-10 left-10 rounded-3xl bg-white p-3'
        >
          <Image
            className='h-10 object-cover'
            src='/assets/svgs/logo-contained.svg'
            alt='Badminton Hub'
            width={40}
            height={40}
          />
        </Link>
        <Button
          variant='text'
          color='secondary'
          className='!absolute top-10 right-10 flex items-center gap-2'
          onClick={() => router.push(HREF.HOME)}
        >
          <IconHome />
          <span>{t('back-to-home')}</span>
        </Button>
      </div>
      <div className='flex max-h-screen flex-1 flex-col overflow-y-auto p-6'>
        <div className='text-right'>
          <SelectLocale />
        </div>
        {children}
      </div>
    </div>
  );
}
