import Image from 'next/image';

export default function LocationIcon({ ...rest }) {
  return (
    <Image
      {...rest}
      src='/icons/location.svg'
      alt='location'
      height='16'
      width='16'
    />
  );
}
