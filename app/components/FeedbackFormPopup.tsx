import axios from 'axios'
import { useFormik } from 'formik'
import { ChangeEvent, useState } from 'react'
import { BarLoader, MoonLoader} from 'react-spinners'
import { DeleteBtn } from './Icons'
import { Button } from './Buttons'
import { Popup } from './Popup'
import fileStorage from '../classes/S3Client'

type Props = {
  onClose: () => void
}

type FormValues = {
  title: string
  details: string
}

export function FeedbackFormPopup({ onClose }: Props) {
  const [files, setFiles] = useState([] as File[])
  const [fileUrls, setFileUrls] = useState([] as string[])
  const [isUploading, setIsUploading] = useState(false)
  const [isPosting, setIsPosting] = useState(false)

  const handleCreatePost = async ({ title, details }: FormValues) => {
    setIsPosting(true)
    await axios.post('/api/feedback', {
      title,
      details,
      files: fileUrls,
    })
    setIsPosting(false)
    onClose()
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: '',
      details: '',
    },
    onSubmit: handleCreatePost,
  })

  const handleAttachFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    const filesToAttach = Array.from(e.target.files || [])
    setFiles(filesToAttach)
    const formData = new FormData()
    for (const file of filesToAttach) {
      formData.append(file.name, file)
    }
    setIsUploading(true)
    const resUpload = await axios.post(`/api/upload`, formData)
    setFileUrls((prev) => resUpload.data.concat(prev))
    setIsUploading(false)
  }

  const handleRemoveUploadedFile = async (url: string) => {
    const fileName = url.replace(fileStorage.bucketUrl, '')
    await axios.delete(`/api/upload/${fileName}`)
    setFileUrls(prev => prev.filter(item => item !== url))
  }

  return (
    <Popup title='Make a suggestion' onClose={onClose}>
      <div className='p-4 pb-0'>
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
              <label className='text-gray-600 border-2 border-gray py-2 px-3 rounded-md cursor-pointer'>
                Attach files
                <input
                  type='file'
                  multiple
                  accept='image/*'
                  className='hidden'
                  onChange={handleAttachFiles}
                />
              </label>
              <div className='mt-5 flex flex-wrap gap-4'>
                {isUploading &&
                  files.map((file) => (
                    <div
                      key={file.name}
                      className='h-16 w-16 border border-gray-400 rounded-md flex justify-center items-center'
                    >
                      <MoonLoader
                        size={40}
                        color='gray'
                        speedMultiplier={0.5}
                      />
                    </div>
                  ))}
                {fileUrls.length > 0 &&
                  fileUrls.map((url) => (
                    <div
                      key={url}
                      className='h-16 border border-gray-400 rounded-md relative'
                    >
                      <img
                        src={url}
                        alt={url}
                        className='h-full rounded-md p-0.5'
                      />
                      <button
                        type='button'
                        className='absolute -top-2 -right-2 hover:translate-y-1 duration-100'
                        onClick={() => handleRemoveUploadedFile(url)}
                      >
                        <DeleteBtn />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className='w-full mt-8 flex justify-end'>
              <Button
                primary
                submit
                disabled={!values.title || !values.details || isUploading}
              >
                <div className='flex items-center gap-1'>Create post</div>
              </Button>
            </div>
          </div>
        </form>
        <div className='h-1 w-full mt-3'>
          <BarLoader
            color='gray'
            loading={isPosting}
            width='100%'
            height='2px'
            speedMultiplier={0.8}
          />
        </div>
      </div>
    </Popup>
  )
}
