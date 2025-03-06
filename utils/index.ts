export * from './datetime';
export * from './dom';

export function sleep(ms: number) {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      resolve(timeoutId);
    }, ms);
  });
}

export function asNumber(value: any, fallbackValue: null | number = null) {
  const num = Number(value);
  return Number.isInteger(num) ? num : fallbackValue;
}
