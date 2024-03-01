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
}) => {
  const classBg = primary
    ? disabled
      ? 'bg-blue-200'
      : 'bg-blue-500'
    : disabled
    ? 'bg-slate-200'
    : 'bg-slate-500'
  const classDisabled = disabled ? 'text-opacity-40' : 'text-opacity-90'
  return (
    <button
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      className={`py-2 px-3 rounded-md text-white ${classBg} ${classDisabled}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { Button }
