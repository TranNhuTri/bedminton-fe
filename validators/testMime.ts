import { MixedSchema } from 'yup';

export function testMime(
  this: MixedSchema,
  mimes: string | string[],
  message: string
) {
  return this.test('mimes', message, (value) => {
    if (!value) return true;

    if (!(value instanceof File)) return false;
    const file = value as File;
    const whilelistMimeTypes =
      typeof mimes === 'string'
        ? mimes.split(',').map((mime) => mime.toLowerCase().trim())
        : mimes.map((mime) => mime.toLowerCase());
    const isValid = whilelistMimeTypes.some((mime) =>
      new RegExp(mime).test(file.type)
    );
    return isValid;
  });
}
