'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  MenuItem,
  Select,
  SelectProps,
  SelectChangeEvent,
} from '@mui/material';

import { IconChevronDown } from '@/components/Icon';
import type { Option } from '@/types';

interface Props extends SelectProps {
  initialValue: Option['id'] | undefined;
  options: Option[];
  onChange: (value: Option['id'] | undefined) => void;
}

export default function SelectVariants({
  initialValue,
  options = [],
  onChange,
  ...rest
}: Props) {
  const t = useTranslations('Common');
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Select
      {...rest}
      value={value}
      IconComponent={IconChevronDown}
      onChange={handleChange}
    >
      {options.length ? (
        options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))
      ) : (
        <MenuItem disabled>{t('select.empty')}</MenuItem>
      )}
    </Select>
  );
}
