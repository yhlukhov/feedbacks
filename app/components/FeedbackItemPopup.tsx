import { TFeedbackItem } from "./types"
import { ArrowUp, BackBtn, CloseBtn } from './Icons'
import { FeedbackItemComments } from "."
import { Popup } from "./Popup"
import { Button } from "./Buttons"

type Props = {
  item: TFeedbackItem
  onClose: () => void
}

export function FeedbackItemPopup({ item, onClose }: Props) {
  
  const handleUpvote = () => {

  }

  return (
    <Popup title={item.title} onClose={onClose}>
      <div className='p-2'>{item.details}</div>
      <div className='text-right mb-4'>
        <Button primary onClick={handleUpvote}>
          <div className="flex gap-1 items-center">
            <ArrowUp /> Upvote {64}
          </div>
        </Button>
      </div>
      <div className="pt-2 border-t-2 border-slate-300">
        <FeedbackItemComments />
      </div>
    </Popup>
  )
}