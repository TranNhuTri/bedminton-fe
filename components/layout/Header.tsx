'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@mui/material';

import { IconLocation, IconUser } from '@/components/Icon';
import { SelectLocale } from '@/components/Select';
import { HREF } from '@/configs';

export default function LayoutHeader() {
  const t = useTranslations('Layout');
  const router = useRouter();

  return (
    <header className='border-primary-200 fixed top-0 h-16 w-full border-b bg-white'>
      <div className='mx-auto flex h-full max-w-10/12 items-center justify-between py-2'>
        <Image
          className='h-10 object-cover'
          src='/assets/svgs/brand.svg'
          alt='Badminton Hub'
          width={234}
          height={40}
        />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <IconLocation className='text-primary-500 h-4 w-4' />
            <span>{t('header.location')}</span>
          </div>
          <SelectLocale />
          <Button
            variant='outlined'
            color='secondary'
            className='flex items-center gap-2'
            onClick={() => router.push(HREF.LOGIN)}
          >
            <IconUser />
            <span>{t('header.login')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
