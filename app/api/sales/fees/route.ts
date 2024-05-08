"use strict"

import { NextResponse } from "next/server"
import z from "zod"

import clientPromise from "@/lib/mongodb"

export const GET = async (req: Request) => {
  try {
    // get the permitted users from the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("config")
    const sales = await db.findOne({ name: "sales" })

    return new NextResponse(JSON.stringify(sales?.fees), {
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
      shipping: z.number(),
      processing: z.number(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // get the permitted users from the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("config")
    const res = await db.updateOne(
      { name: "sales" },
      {
        $set: {
          fees: {
            shipping: body.data.shipping,
            processing: body.data.processing,
          },
        },
      }
    )

    // Check if the update was successful
    if (!res.acknowledged || res.matchedCount === 0) {
      return new NextResponse("Fees Not Found or Update Failed", {
        status: 404,
      })
    }
    return new NextResponse("Fees Edited!", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
