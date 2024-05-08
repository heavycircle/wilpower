"use strict"

import { NextResponse } from "next/server"
import z from "zod"

import clientPromise from "@/lib/mongodb"

export const GET = async (req: Request) => {
  try {
    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("sales")

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

export const PUT = async (req: Request) => {
  try {
    // validate request body
    const schema = z.object({
      id: z.string(),
      archived: z.boolean(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("sales")

    const { ObjectId } = require("mongodb")
    const saleId = new ObjectId(body.data.id)

    // attempt to update the testimonial
    const res = await db.updateOne(
      { _id: saleId },
      { $set: { archived: body.data.archived } }
    )
    // Check if the update was successful
    if (!res.acknowledged || res.matchedCount === 0) {
      return new NextResponse("Sale Not Found or Update Failed", {
        status: 404,
      })
    }
    return new NextResponse("Sale Edited!", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
