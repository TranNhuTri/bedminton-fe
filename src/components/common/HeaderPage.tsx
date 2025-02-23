import Logo from '@components/icons/Logo'
import UserIcon from '@components/icons/UserIcon'
import LocationIcon from '@components/icons/LocationIcon'
import AppButton from './AppButton'
import AppMenuBar from './AppMenuBar'
import LanguageDropdown from './LanguageDropdown'

function HeaderPage() {
  return (
    <header className='bg-primary-25 relative h-16'>
      <div className='mx-auto flex h-full max-w-10/12 items-center justify-between'>
        <Logo className='h-10' />
        <div className='flex gap-4'>
          <div className='flex items-center justify-center gap-1'>
            <LocationIcon />
            Danang
          </div>
          <LanguageDropdown />
          <AppButton
            label='Login'
            className='self-center bg-gray-500 text-white'
            icon={() => <UserIcon className='h-4 w-4' />}
          />
        </div>
      </div>

      <AppMenuBar className='absolute top-0 left-1/2 h-16 -translate-x-1/2 transform' />
    </header>
  )
}

export default HeaderPage
