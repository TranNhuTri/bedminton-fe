import { Outlet } from 'react-router'

import HeaderPage from '@components/common/HeaderPage'

function DefaultLayout() {
  return (
    <>
      <HeaderPage />
      <div className='bg-primary-25 h-full w-full'>
        <Outlet />
      </div>
    </>
  )
}
export default DefaultLayout
