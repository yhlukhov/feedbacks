import { createPortal } from 'react-dom'
import { ArrowUp } from './Icons'
import { FeedbackItemPopup } from './FeedbackItemPopup'
import { TFeedbackItem } from './types'
import { useState } from 'react'

type Props = {
  item: TFeedbackItem
}

export function FeedbackItem({ item }: Props) {
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(false)

  return (
    <div className='flex items-center gap-4 my-6'>
      <div
        className='grow cursor-pointer'
        onClick={() => setShowFeedbackPopupItem(true)}
      >
        <h2 className='font-bold'>{item.title}</h2>
        <p className='text-gray-600 text-sm'>{item.details}</p>
      </div>
      <div>
        <button
          onClick={() => {}}
          className='flex items-center gap-1 shadow-sm border rounded-md py-1 px-2'
        >
          <ArrowUp />
          <div>80</div>
        </button>
      </div>

      {showFeedbackPopupItem &&
        createPortal(
          <FeedbackItemPopup
            item={item}
            onClose={() => setShowFeedbackPopupItem(false)}
          />,
          document.body
        )}
    </div>
  )
}
