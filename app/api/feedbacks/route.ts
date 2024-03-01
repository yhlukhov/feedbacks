import { Feedback } from "@/app/models/Feedback"

export async function GET() {
  const feedbacks = await Feedback.find()
  return Response.json(feedbacks)
}