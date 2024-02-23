// Icons components

const ArrowUp = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='w-5 h-5 cursor-pointer'
  >
    <path
      fillRule='evenodd'
      d='M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z'
      clipRule='evenodd'
    />
  </svg>
)

const CloseBtn = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 cursor-pointer'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
)

const BackBtn = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 cursor-pointer'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
    />
  </svg>
)

export { ArrowUp, CloseBtn, BackBtn }
