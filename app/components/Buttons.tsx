import { FC, MouseEventHandler, ReactNode } from 'react'

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  primary?: boolean
  disabled?: boolean
  submit?: boolean
  children: ReactNode
}

const Button: FC<Props> = ({
  onClick,
  primary,
  disabled,
  submit,
  children,
}) => (
  <button
    onClick={onClick}
    type={submit ? 'submit' : 'button'}
    className={`${primary ? 'bg-blue-500 ' : 'bg-slate-500 '}
      ${disabled ? 'text-opacity-40 bg-blue-300 ' : ''}
    py-2 px-3 rounded-md text-white text-opacity-90`}
    disabled={disabled}
  >
    {children}
  </button>
)

export { Button }
