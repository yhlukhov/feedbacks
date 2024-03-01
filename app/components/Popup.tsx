import { ReactNode } from 'react'
import { BackBtn, CloseBtn } from './Icons'

type Props = {
  title: string
  onClose: () => void
  children: ReactNode
}

export function Popup({ title, onClose, children }: Props) {
  return (
    <div
      className='w-full h-full fixed top-0 left-0 flex justify-center bg-slate-500/60'
      onClick={onClose}
    >
      <div
        className='w-full h-full md:w-3/5 lg:w-2/5 md:h-fit md:mt-20 px-4 py-3 pb-2 md:rounded-lg bg-slate-100/95'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative flex justify-center pb-2 border-b-2 border-slate-300'>
          <div className='md:hidden absolute top-40 left-40' onClick={onClose}>
            <BackBtn />
          </div>
          <h2>{title}</h2>
          <div
            className='hidden md:block absolute top-0 right-0'
            onClick={onClose}
          >
            <CloseBtn />
          </div>
        </div>
        <>{children}</>
      </div>
    </div>
  )
}
