import { useTranslations } from 'next-intl';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  SelectProps,
} from '@mui/material';

import type { Option } from '@/types';
import { useState } from 'react';

type Props = SelectProps & {
  options?: Option[];
  label?: string;
  icon?: React.ReactNode;
  formControlClass?: string;
};

export default function SelectWithIcon({
  options,
  label,
  icon,
  className,
  ...rest
}: Props) {
  const t = useTranslations('Common');
  const [focused, setFocused] = useState(false);
  const hasValue = rest.value !== undefined && rest.value !== '';

  return (
    <FormControl className={className} variant='outlined'>
      {label && (
        <InputLabel
          htmlFor='select'
          shrink={focused || hasValue}
          sx={{
            top: '-16%',
            left: '26px',
            backgroundColor: 'background.paper',
            '&.MuiInputLabel-shrink': {
              top: '0 !important',
              left: '0 !important',
            },
          }}
        >
          {label}
        </InputLabel>
      )}
      <Select
        id='select'
        label={label}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          if (!hasValue) {
            setFocused(false);
          }
        }}
        startAdornment={
          icon && <InputAdornment position='start'>{icon}</InputAdornment>
        }
        notched={focused || hasValue}
        {...rest}
      >
        {options?.length ? (
          options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>{t('select.empty')}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
