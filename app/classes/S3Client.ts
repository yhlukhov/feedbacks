import {S3Client, PutObjectCommand, DeleteObjectCommand} from '@aws-sdk/client-s3'

class S3Storage {
  private readonly bucket = 'feedback-board-ig'
  readonly bucketUrl =
    'https://feedback-board-ig.s3.eu-north-1.amazonaws.com/'
  private readonly region = 'eu-north-1'
  private s3Client = new S3Client({
    region: this.region,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  })

  private fileName = ''

  private getSendFileCommand = async (file: File) => {
    this.fileName = `${Date.now().toString()}_${file.name}`
    const arrayBuffer = await file.arrayBuffer()
    const fileBuffer = Buffer.from(arrayBuffer)
    return new PutObjectCommand({
      Bucket: this.bucket,
      Key: this.fileName,
      Body: fileBuffer,
      ACL: 'public-read',
      ContentType: file.type,
    })
  }

  private getDeleteFileCommand = async (fileName: string) => {
    return new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: fileName
    })
  }

  sendFile = async (file: File) => {
    const command = await this.getSendFileCommand(file)
    await this.s3Client.send(command)
    return this.bucketUrl + this.fileName
  }

  deleteFile = async (fileName: string) => {
    const command = await this.getDeleteFileCommand(fileName)
    await this.s3Client.send(command)
  }
}


//* Create storage and export it
export default new S3Storage()