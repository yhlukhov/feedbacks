import { FC, MouseEventHandler, ReactNode } from 'react'

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  primary?: boolean
  children: ReactNode
}

const Button: FC<Props> = ({ onClick, primary, children }) => (
  <button onClick={onClick} className={`${primary ? 'bg-blue-500' : 'bg-slate-500'} py-2 px-3 rounded-md text-white text-opacity-90`}>
    {children}
  </button>
)

export { Button }
