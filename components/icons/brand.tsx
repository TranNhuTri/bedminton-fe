import Image from 'next/image';

export default function Brand({ ...rest }) {
  return (
    <Image
      {...rest}
      src='/icons/brand.svg'
      alt='brand'
      width='230'
      height='40'
    />
  );
}
