'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import {
  IconBrand,
  IconEmail,
  IconEye,
  IconEyeSlash,
  IconFacebook,
  IconGoogle,
  IconLock,
} from '@/components/Icon';
import { SelectLocale } from '@/components/Select';
import { HREF } from '@/configs';

export default function Home() {
  const t = useTranslations('Login');
  const [showPassword, setShowPassword] = useState(false);

  const onToggleShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className='flex flex-col'>
      <div className='text-right'>
        <SelectLocale />
      </div>
      <div className='mt-20 flex flex-col items-center gap-2'>
        <div className='text-5xl'>{t('title')}</div>
        <IconBrand className='h-10' />
      </div>
      <div className='mx-auto mt-12 w-full max-w-[480px]'>
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
          <FormControl variant='outlined' className='w-full'>
            <InputLabel htmlFor='input-password'>{t('password')}</InputLabel>
            <OutlinedInput
              id='input-password'
              label={t('password')}
              type={showPassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment position='start'>
                  <IconLock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    color='secondary'
                    size='small'
                    onClick={onToggleShowPassword}
                  >
                    {showPassword ? <IconEyeSlash /> : <IconEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className='text-right'>
            <Link
              href={HREF.FORGOT_PASSWORD}
              className='text-primary-500 underline-offset-4 transition duration-300 hover:underline'
            >
              {t('forgot-password')}
            </Link>
          </div>
          <Button variant='contained'>{t('login')}</Button>
          <Divider className='border-gray-200 text-gray-400'>
            {t('or-login-with')}
          </Divider>
          <div className='flex gap-2'>
            <Button
              variant='outlined'
              color='secondary'
              className='flex flex-1 items-center gap-2'
            >
              <IconGoogle className='h-6 w-6' />
              <span>Google</span>
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              className='flex flex-1 items-center gap-2'
            >
              <IconFacebook className='h-6 w-6' />
              <span>Facebook</span>
            </Button>
          </div>
          <div className='flex justify-center gap-1.5'>
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
