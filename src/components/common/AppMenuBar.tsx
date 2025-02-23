import { Menubar } from 'primereact/menubar'
import { useNavigate } from 'react-router'

import { buildClassName } from '@utils/style.util'

const baseStyles = {
  root: {
    className: buildClassName(
      `
        flex
        relative
        px-16
        mx-8
        h-full
        bg-white
        rounded-bl-[32px]
        rounded-br-[32px]
        before:absolute
        before:h-full
        before:w-8
        before:bg-transparent
        before:-left-8
        before:rounded-tr-[32px]
        before:shadow-header
        after:absolute
        after:h-full
        after:w-8
        after:bg-transparent
        after:-right-8
        after:rounded-tl-[32px]
        after:shadow-header
      `
    ),
  },
  button: { className: 'hidden' },
  menu: { className: 'flex items-center gap-8' },
  menuitem: {
    className: buildClassName(
      `
        relative
        before:absolute
        before:w-0
        before:transition-all
        before:duration-200
        hover:before:w-6
        hover:before:h-0.5
        hover:before:bottom-0
        hover:before:bg-primary-500
        hover:before:rounded-full
      `
    ),
  },
}

function AppMenuBar({ ...rest }) {
  const navigate = useNavigate()

  const items = [
    {
      label: 'Home',
      command: () => {
        navigate('home')
      },
    },
    {
      label: 'Search',
      command: () => {
        navigate('search')
      },
    },
  ]

  return (
    <div {...rest}>
      <Menubar model={items} pt={baseStyles} unstyled />
    </div>
  )
}

export default AppMenuBar
