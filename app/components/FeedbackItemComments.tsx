export function FeedbackItemComments() {
  return (
    <div className='flex flex-col mb-2'>
      <div className='flex gap-3'>
        <div className='w-28 h-10 border-slate-400/80 border-2 rounded-full flex justify-center items-center'>
          Avat
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, aut
          eveniet ex voluptatibus beatae id. Asperiores rerum vitae ducimus
          consequatur?
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-1 text-right">Anonymours User &middot; a few seconds ago</div>
    </div>
  )
}
