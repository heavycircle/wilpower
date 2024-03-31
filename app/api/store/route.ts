"use strict"

import { NextResponse } from "next/server"
import { z } from "zod"

import clientPromise from "@/lib/mongodb"

export const POST = async (req: Request) => {
  try {
    // validate request body
    const schema = z.object({
      name: z.string(),
      price: z.number(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("store")
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export const GET = async (req: Request) => {
  try {
    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("store")

    // get all items
    const list = await db.find({}).toArray()
    return new NextResponse(JSON.stringify(list), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
