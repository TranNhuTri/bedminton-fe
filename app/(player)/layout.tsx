import { LayoutHeader } from '@/components/Layout';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function HomeLayout({ children }: Props) {
  return (
    <div className='bg-primary-25 min-h-screen pt-16'>
      <LayoutHeader />
      {children}
    </div>
  );
}
