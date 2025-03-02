'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

import { IconBrand, IconLocation, IconUser } from '@/components/Icon';
import { SelectLocale } from '@/components/Select';
import { HREF } from '@/configs';

export default function LayoutHeader() {
  const t = useTranslations('Layout');
  const router = useRouter();

  return (
    <header className='bg-primary-25 fixed top-0 h-16 w-full'>
      <div className='mx-auto flex h-full max-w-10/12 items-center justify-between pt-4 pb-2'>
        <IconBrand className='h-10' />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <IconLocation className='text-primary-500 h-4 w-4' />
            <span>{t('header.location')}</span>
          </div>
          <SelectLocale />
          <Button
            variant='text'
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
