'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@mui/material';

import { IconSearch } from '@/components/Icon';
import { HREF } from '@/configs';

export default function Home() {
  const t = useTranslations('Home');
  const router = useRouter();

  return (
    <div className='mx-auto flex max-w-10/12 py-20'>
      <div className='flex flex-col gap-6'>
        <div className='text-6xl leading-24 font-bold'>
          {t.rich('title', {
            highlight: (chunks) => (
              <span className='text-primary-500'>{chunks}</span>
            ),
          })}
        </div>
        <Button
          variant='contained'
          className='flex w-fit items-center gap-2'
          onClick={() => router.push(HREF.SEARCH_CASUAL_COURT)}
        >
          <IconSearch />
          <span>{t('search-now')}</span>
        </Button>
      </div>
      <Image
        src='/assets/svgs/home-player.svg'
        alt='Badminton Hub'
        width={480}
        height={480}
        className='h-[480px] w-[480px]'
      />
    </div>
  );
}
