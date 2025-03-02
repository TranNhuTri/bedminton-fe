'use client';

import { useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { IconEye, IconEyeSlash, IconLock } from '@/components/Icon';

type Props = {
  label?: string;
};

export default function InputPassword({ label, ...rest }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const onToggleShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl variant='outlined' className='w-full'>
      {label && <InputLabel htmlFor='input-password'>{label}</InputLabel>}
      <OutlinedInput
        id='input-password'
        label={label}
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
        {...rest}
      />
    </FormControl>
  );
}
