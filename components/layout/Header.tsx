import { useTranslations } from 'next-intl';
import { Button } from '@mui/material';

import { IconBrand, IconLocation, IconUser } from '@/components/Icon';
import { SelectLanguage } from '@/components/Select';

export default function LayoutHeader() {
  const t = useTranslations('Layout');

  return (
    <header className='h-16 w-full fixed bg-primary-25'>
      <div className='h-full max-w-10/12 flex items-center justify-between pt-4 pb-2 mx-auto'>
        <IconBrand className='h-10' />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <IconLocation className='h-4 w-4 text-primary-500' />
            <span>
              {t('header.location')}
            </span>
          </div>
          <SelectLanguage />
          <Button variant='outlined' color='secondary' className='flex items-center gap-1'>
            <IconUser className='h-4 w-4 text-gray-500' />
            <span>
              {t('header.login')}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
