import LanguageIcon from '@components/icons/LanguageIcon'
import { buildClassName } from '@utils/style.util'
import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { useState } from 'react'

type Language = {
  code: string
}

const languages: Language[] = [{ code: 'EN' }, { code: 'VN' }]

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  const baseStyles = {
    root: {
      className: buildClassName(
        `
          items-center
          bg-white
          ${isOpen ? 'rounded-xl rounded-bl-none rounded-br-none' : 'rounded-xl'}
          px-3
          py-1
          gap-2
        `
      ),
    },
    panel: {
      className: buildClassName(
        `
          bg-white
          ${isOpen ? 'rounded-xl rounded-tl-none rounded-tr-none' : 'rounded-xl'}
        `
      ),
    },
    list: {
      className: buildClassName(
        `
          text-center
        `
      ),
    },
    item: {
      className: buildClassName(
        `
          px-3
          py-1
          outline-none
          hover:bg-gray-100
          hover:cursor-pointer
          last:hover:rounded-bl-xl
          last:hover:rounded-br-xl
        `
      ),
    },
  }

  const selectedLanguageTemplate = (option: Language, props: DropdownProps) => {
    if (option) {
      return (
        <div className='align-items-center flex gap-2'>
          <LanguageIcon />
          <div className='min-w-8 text-center'>{option.code}</div>
        </div>
      )
    }

    return props.placeholder
  }

  return (
    <Dropdown
      value={selectedLanguage}
      valueTemplate={selectedLanguageTemplate}
      onChange={(event) => setSelectedLanguage(event.value)}
      options={languages}
      optionLabel='code'
      pt={baseStyles}
      onShow={() => setIsOpen(true)}
      onHide={() => setIsOpen(false)}
    />
  )
}

export default LanguageDropdown
