import { LayoutHeader } from '@/components/Layout';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default async function HomeLayout({ children }: Props) {
  return (
    <div>
      <LayoutHeader />
      {children}
    </div>
  );
}
