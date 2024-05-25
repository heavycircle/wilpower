import { NextResponse } from "next/server"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

const s3client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_KEY_ID!,
  },
})
const Bucket = process.env.AWS_BUCKET_NAME

interface DbFile {
  url: string
  description: string
}

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData()
    let files: File[] = []
    let filenames: DbFile[] = []
    formData.forEach((value) => files.push(value as File))

    await Promise.all(
      files.map(async (file) => {
        const Body = (await file.arrayBuffer()) as Buffer
        s3client.send(new PutObjectCommand({ Bucket, Key: file.name, Body }))
        filenames.push({ url: "/" + file.name, description: file.name })
      })
    )

    return new NextResponse(JSON.stringify(filenames), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
