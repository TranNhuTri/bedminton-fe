import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className='mx-auto flex max-w-10/12 justify-center pt-28'>
      <div className='max-w-1/2'>
        <span className='mb-6 block text-7xl leading-24 font-bold'>
          {t('title')}
        </span>
      </div>
    </div>
  );
}
