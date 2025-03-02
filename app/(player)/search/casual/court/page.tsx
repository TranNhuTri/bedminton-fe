'use client';

import { useTranslations } from 'next-intl';
import { Chip } from '@mui/material';

import { CommonSelect } from '@/components/Common';
import {
  IconCalendar,
  IconCenter,
  IconClock,
  IconCurrency,
  IconSort,
  IconUser,
  IconUsers,
} from '@/components/Icon';

export default function Home() {
  const t = useTranslations('SearchCasualCourt');

  return (
    <div className='flex flex-col gap-6 p-6'>
      <div className='flex w-full gap-4 rounded-3xl bg-white p-6'>
        <CommonSelect
          className='flex-1'
          label={t('center')}
          icon={<IconCenter />}
        />
        <CommonSelect
          className='flex-1'
          label={t('day')}
          icon={<IconCalendar />}
        />
        <CommonSelect
          className='flex-1'
          label={t('start-time')}
          icon={<IconClock />}
        />
        <CommonSelect
          className='flex-1'
          label={t('end-time')}
          icon={<IconClock />}
        />
        <CommonSelect
          className='flex-1'
          label={t('fee-calculation-method')}
          icon={<IconCurrency />}
        />
      </div>
      <div className='flex gap-6'>
        <div className='flex min-w-2xs flex-col gap-4 rounded-3xl bg-white p-6'>
          <CommonSelect
            className='flex-1'
            label={t('minimun-number-of-slots')}
            icon={<IconUsers />}
          />
          <CommonSelect
            className='flex-1'
            label={t('gender')}
            icon={<IconUser />}
          />
          <CommonSelect
            className='flex-1'
            label={t('levels.title')}
            icon={<IconUser />}
          />
          <CommonSelect
            className='flex-1'
            label={t('shuttlecock-name')}
            icon={<IconUser />}
          />
        </div>
        <div className='flex w-full flex-col gap-6'>
          <div className='flex w-full items-end justify-between'>
            <div className='flex items-center gap-4'>
              <div className='text-3xl'>{t('recommended-courts')}</div>
              <Chip variant='outlined' label='100' color='primary' />
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                <div>{t('sort-by.title')}:</div>
                <div className='text-primary-500 font-bold'>
                  {t('sort-by.location')}
                </div>
              </div>
              <IconSort className='text-primary-500 h-4 w-4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
