import type { Option } from '@/types';

/**
 * Helper to produce an array of enum options.
 * @param enumeration
 * @param converter
 */
export function enumToOptions<T extends Record<string, any>>(
  enumeration: T,
  converter?: (key: string) => string,
): Option<T>[] {
  return (Object.keys(enumeration) as Array<keyof T>)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => ({
      id: enumeration[key],
      label: converter ? converter(key.toString()) : key.toString(),
    }));
}
