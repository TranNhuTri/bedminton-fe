import IconBrand from '@/components/Icon/Brand';
import IconLocation from '@/components/Icon/Location';

export default function LayoutHeader() {
  return (
    <header className='h-16 relative bg-primary-25'>
      <div className='h-full max-w-10/12 flex items-center justify-between pt-4 pb-2 mx-auto'>
        <IconBrand className='h-10' />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <IconLocation className='h-4 w-4 text-primary-500' />
            <span>Danang</span>
          </div>
        </div>
      </div>
    </header>
  );
}
