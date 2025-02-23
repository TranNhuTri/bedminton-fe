import AppButton from '@components/common/AppButton'
import BadmintonMan from '@components/icons/BadmintonMan'
import SearchIcon from '@components/icons/SearchIcon'

function Home() {
  return (
    <div className='mx-auto flex max-w-10/12 justify-center pt-28'>
      <div className='max-w-1/2'>
        <span className='mb-6 block text-7xl leading-24 font-bold'>
          Searching for a <span className='text-primary-500'>casual</span> badminton court
        </span>
        <AppButton label='Search now' className='bg-primary-500 text-white' icon={() => <SearchIcon />} />
      </div>
      <BadmintonMan className='' />
    </div>
  )
}

export default Home
