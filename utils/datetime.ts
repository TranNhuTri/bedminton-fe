import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { DATETIME_FORMAT } from '~/configs';
import type { DateTime } from '~/types';

dayjs.extend(utc);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);

export const isValidDate = (date: DateTime) => {
  return dayjs(date).isValid();
};

export const formatDateTime = (
  date: DateTime,
  format: string = DATETIME_FORMAT.DATE_ISO
) => {
  if (!date || !isValidDate(date)) return '';

  return dayjs(date).format(format);
};

export const isBeforeToday = (date: DateTime) => {
  if (!date || !isValidDate(date)) return false;

  return dayjs(date).isBefore(dayjs().startOf('day'));
};

export const isBeforeStartDay = (date: DateTime, startDay: DateTime) => {
  if (!date || !isValidDate(date) || !startDay || !isValidDate(startDay))
    return false;

  return dayjs(date).isBefore(dayjs(startDay).startOf('day'));
};

export const isAfterEndDay = (date: DateTime, endDay: DateTime) => {
  if (!date || !isValidDate(date) || !endDay || !isValidDate(endDay))
    return false;

  return dayjs(date).isAfter(dayjs(endDay).endOf('day'));
};
