import Image from 'next/image';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default async function AuthLayout({ children }: Props) {
  return (
    <div className='bg-primary-25 flex h-screen'>
      <div className='flex-1 p-6'>
        <Image
          className='h-full w-full rounded-[32px] object-cover'
          src='/assets/images/auth-image.jpg'
          alt='Badminton Hub'
          width={4160}
          height={6240}
        />
      </div>
      <div className='max-h-screen flex-1 overflow-y-auto p-6'>{children}</div>
    </div>
  );
}
