import fileStorage from '../../classes/S3Client'

export async function POST(req: Request) {
  const uploadedFiles = [] as string[]
  const formData = await req.formData()

  for (const file of formData.values()) {
    if (file instanceof File) {
      const fileurl = await fileStorage.sendFile(file)
      uploadedFiles.push(fileurl)
    }
  }

  return Response.json(uploadedFiles)
}