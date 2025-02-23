import { Button } from 'primereact/button'

import { buildClassName } from '@utils/style.util'

const baseStyles = {
  root: {
    className: buildClassName(
      `
        px-3
        py-1
        h-10
        flex
        gap-2
        rounded-xl
        justify-center
        items-center
        hover:cursor-pointer
        hover:opacity-80
        hover:shadow-md
        transition-all
        duration-200
      `
    ),
  },
}

function AppButton({ ...rest }) {
  return <Button {...rest} pt={baseStyles} unstyled></Button>
}

export default AppButton
