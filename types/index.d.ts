import { LocationQueryValue } from 'vue-router';

export * from './api';
export * from './app';
export * from './datetime';
export * from './layouts';
export * from './validations';

export type RawPaginationQuery = {
  page: LocationQueryValue | LocationQueryValue[];
  offset: LocationQueryValue | LocationQueryValue[];
};
