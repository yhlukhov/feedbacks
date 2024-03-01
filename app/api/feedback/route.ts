import mongoose from "mongoose"
import { Feedback } from "@/app/models"

export async function POST(req: Request) {
  const jsonBody = await req.json()
  const { title, details, files } = jsonBody
  const mongoUrl = process.env.MONGO_URL
  
  if (mongoUrl) {
    await mongoose.connect(mongoUrl)
    const feedback = await Feedback.create({ title, details, files })
    return Response.json(feedback)
  }

  return Response.error()
}