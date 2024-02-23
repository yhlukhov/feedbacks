import { useFormik } from 'formik'
import { TFeedbackItem } from './types'
import { ArrowUp } from './Icons'
import { FeedbackItemComments } from '.'
import { Popup } from './Popup'
import { Button } from './Buttons'

type Props = {
  item: TFeedbackItem
  onClose: () => void
}

type FormValues = {
  comment: string
}

type Errors = {
  comment?: string
}

export function FeedbackItemPopup({ item, onClose }: Props) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: (values) => console.log(values),
  })

  const handleUpvote = () => {}

  return (
    <Popup title={item.title} onClose={onClose}>
      <div className='p-2'>{item.details}</div>
      <div className='text-right mb-4'>
        <Button primary onClick={handleUpvote}>
          <div className='flex gap-1 items-center'>
            <ArrowUp /> Upvote {64}
          </div>
        </Button>
      </div>
      <div className='py-2 border-t-2 border-slate-300'>
        <FeedbackItemComments />
      </div>
      <div className='border-t-2 pt-4 border-slate-300'>
        <form onSubmit={handleSubmit}>
          <textarea
            className='w-full h-16 rounded-lg'
            name='comment'
            value={values.comment}
            onChange={handleChange}
          ></textarea>
          <div className='flex justify-end gap-4'>
            <button type='button'>Add files</button>
            <Button primary submit disabled={values.comment === ''}>Comment</Button>
          </div>
        </form>
      </div>
    </Popup>
  )
}
