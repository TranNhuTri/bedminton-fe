import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import {
  IconBrand,
  IconEmail,
  IconFacebook,
  IconGoogle,
  IconUser,
} from '@/components/Icon';
import { InputPassword } from '@/components/Input';
import { HREF } from '@/configs';

export default function Register() {
  const t = useTranslations('Register');

  return (
    <div className='flex flex-col'>
      <div className='mt-20 flex flex-col items-center gap-2'>
        <div className='text-5xl'>{t('title')}</div>
        <IconBrand className='h-10' />
      </div>
      <div className='mx-auto mt-10 w-full max-w-[480px]'>
        <div className='flex w-full flex-col gap-4 rounded-[32px] bg-white p-6'>
          <FormControl variant='outlined' className='w-full'>
            <InputLabel htmlFor='input-email-address'>
              {t('email-address')}
            </InputLabel>
            <OutlinedInput
              id='input-email-address'
              label={t('email-address')}
              startAdornment={
                <InputAdornment position='start'>
                  <IconEmail />
                </InputAdornment>
              }
            />
          </FormControl>
          <InputPassword label={t('password')} />
          <InputPassword label={t('confirm-password')} />
          <FormControl variant='outlined' className='w-full'>
            <InputLabel htmlFor='input-name'>{t('name')}</InputLabel>
            <OutlinedInput
              id='input-name'
              label={t('name')}
              startAdornment={
                <InputAdornment position='start'>
                  <IconUser />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant='contained'>{t('register')}</Button>
          <Divider className='border-gray-200 text-gray-400'>
            {t('or-register-with')}
          </Divider>
          <div className='flex gap-2'>
            <Button
              variant='outlined'
              color='secondary'
              className='flex flex-1 items-center gap-2'
            >
              <IconGoogle />
              <span>Google</span>
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              className='flex flex-1 items-center gap-2'
            >
              <IconFacebook />
              <span>Facebook</span>
            </Button>
          </div>
          <div className='flex justify-center gap-1.5'>
            <div className='text-gray-400'>{t('already-have-an-account')}</div>
            <Link
              href={HREF.LOGIN}
              className='text-primary-500 underline-offset-4 transition duration-300 hover:underline'
            >
              {t('login')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
