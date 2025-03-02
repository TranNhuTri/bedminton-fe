import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { IconEmail, IconFacebook, IconGoogle } from '@/components/Icon';
import { InputPassword } from '@/components/Input';
import { HREF } from '@/configs';

export default function Login() {
  const t = useTranslations('Login');

  return (
    <div className='flex flex-col'>
      <div className='mt-20 flex flex-col items-center gap-2'>
        <div className='text-5xl'>{t('title')}</div>
        <Image
          className='h-10 object-cover'
          src='/assets/svgs/brand.svg'
          alt='Badminton Hub'
          width={234}
          height={40}
        />
      </div>
      <div className='mx-auto mt-10 w-full max-w-[480px]'>
        <div className='flex w-full flex-col gap-4 rounded-3xl bg-white p-6'>
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
          <div className='text-right'>
            <Link
              href={HREF.FORGOT_PASSWORD}
              className='text-primary-500 text-sm underline-offset-4 transition duration-300 hover:underline'
            >
              {t('forgot-password')}
            </Link>
          </div>
          <Button variant='contained'>{t('login')}</Button>
          <Divider className='border-gray-200 text-sm text-gray-400'>
            {t('or-login-with')}
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
          <div className='flex justify-center gap-1.5 text-sm'>
            <div className='text-gray-400'>{t('dont-have-an-account-yet')}</div>
            <Link
              href={HREF.REGISTER}
              className='text-primary-500 underline-offset-4 transition duration-300 hover:underline'
            >
              {t('register')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
