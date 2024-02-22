'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Button, FeedbackFormPopup, FeedbackItem } from './components'
import { TFeedbackItem } from './components/types'

const feedbacks = [
  {
    title: 'Post more videos and do it more often',
    details:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Mollitia, explicabo, dolor inventore odio excepturi placeat
      porro quos ut similique impedit numquam`,
  },
  {
    title: 'Add icons which are more nice',
    details:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Mollitia, explicabo, dolor inventore odio excepturi placeat
      porro quos ut similique impedit numquam`,
  },
  {
    title: 'Change interface to be darker',
    details:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Mollitia, explicabo, dolor inventore odio excepturi placeat
      porro quos ut similique impedit numquam`,
  },
] as TFeedbackItem[]

export default function Home() {
  const [showFeedbackPopupForm, setShowFeedbackPopupForm] = useState(false)

  return (
    <main className='bg-white max-w-2xl mx-auto shadow-sm md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden'>
      <div className='bg-gradient-to-r from-cyan-400 to to-blue-400 p-8'>
        <h1 className='font-bold text-xl'>Feedback board</h1>
        <p className='text-opacity-90 text-slate-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          ipsa!
        </p>
      </div>
      <div className='bg-gray-100 px-6 py-4 flex'>
        <div className='grow'></div>
        <Button onClick={() => setShowFeedbackPopupForm(true)}>
          Make a suggestion
        </Button>
      </div>
      <div className='px-8'>
        {feedbacks.map(feedback => <FeedbackItem item={feedback} />)}
      </div>
      {showFeedbackPopupForm &&
        createPortal(
          <FeedbackFormPopup onClose={() => setShowFeedbackPopupForm(false)} />,
          document.body
        )}
    </main>
  )
}
