import { Schema, model, models } from 'mongoose'

const feedbackSchema = new Schema({
  title: { type: String, required:true },
  details: { type: String, required: true },
  files: { type: [String] },
  vote: {type: Number, default: 0},
  ip: {type: String}
}, {
  timestamps: true
})

export const Feedback = models.Feedback || model('Feedback', feedbackSchema)