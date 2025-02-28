'use client';

import { ReactNode } from 'react';
import { Button, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  children?: ReactNode;
}

export default function CommonButton({ children, ...rest }: Props) {
  return (
    <Button
      {...rest}
      className='min-h-10 gap-2 !rounded-xl px-3 py-2 !text-base !shadow-none'
      sx={{
        '&.MuiButton-containedPrimary': {
          bgcolor: 'var(--color-primary-500)',
          color: 'var(--color-white)',
        },
        '&.MuiButton-containedSecondary': {
          bgcolor: 'var(--color-gray-500)',
          color: 'var(--color-white)',
        },
        '&.MuiButton-outlinedPrimary': {
          bgcolor: 'var(--color-primary-50)',
          color: 'var(--color-primary-500)',
          outline: 'none',
          border: 'none',
        },
        '&.MuiButton-outlinedSecondary': {
          bgcolor: 'var(--color-gray-50)',
          color: 'var(--color-gray-500)',
          outline: 'none',
          border: 'none',
        },
        '&.MuiButton-textPrimary': {
          bgcolor: 'var(--color-white)',
          color: 'var(--color-primary-500)',
        },
        '&.MuiButton-textSecondary': {
          bgcolor: 'var(--color-white)',
          color: 'var(--color-gray-500)',
        },
      }}
    >
      {children}
    </Button>
  );
}
