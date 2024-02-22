import { Dispatch, SetStateAction } from 'react'
import { useFormik } from 'formik'
import { BackBtn, CloseBtn } from './Icons'
import { Button } from './Buttons'
import { Popup } from './Popup'

type Props = {
  onClose: () => void
}

export function FeedbackFormPopup({ onClose }: Props) {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: '',
      details: '',
      files: [] as File[],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Popup title='Make a suggestion' onClose={onClose}>
      <div className='p-4'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='w-full'>
            <label className='block mb-1 text-slate-700'>Title</label>
            <input
              type='text'
              name='title'
              value={values.title}
              className='h-8 px-2 w-full rounded-md border'
              placeholder='Add a short title'
              onChange={handleChange}
            />
          </div>
          <div className='w-full'>
            <label className='block mb-1 text-slate-700'>Details</label>
            <textarea
              name='details'
              value={values.details}
              className='h-24 px-2 py-1 w-full rounded-md border'
              placeholder='Add details'
              onChange={handleChange}
            />
            <div className='mt-3'>
              <Button onClick={() => {}}>Attach files</Button>
              <Button onClick={() => {}}>Attach MORE files</Button>
            </div>
            <div className='w-full mt-4 flex justify-center'>
              <Button primary onClick={() => {}}>
                Create new post
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Popup>
  )
}
