import { useTranslations } from 'next-intl';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  SelectProps,
} from '@mui/material';

import type { Option } from '@/types';

type Props = SelectProps & {
  options?: Option[];
  label?: string;
  icon?: React.ReactNode;
};

export default function SelectWithIcon({
  options,
  label,
  icon,
  ...rest
}: Props) {
  const t = useTranslations('Common');

  return (
    <FormControl variant='outlined'>
      {label && <InputLabel htmlFor='select'>{label}</InputLabel>}
      <Select
        id='select'
        label={label}
        input={
          <OutlinedInput
            startAdornment={
              icon && <InputAdornment position='start'>{icon}</InputAdornment>
            }
          />
        }
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
