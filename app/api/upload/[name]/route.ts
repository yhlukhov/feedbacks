import fileStorage from '../../../classes/S3Client'

type Params = {
  params: {
    name: string
  }
}

export async function DELETE(req: Request, { params }: Params) {
  await fileStorage.deleteFile(params.name)
  return Response.json('Deleted: ' + params.name)
}
