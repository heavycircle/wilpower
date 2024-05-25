"use strict"

import { NextResponse } from "next/server"
import { z } from "zod"

import clientPromise from "@/lib/mongodb"

const quantitySchema = z.object({
  XS: z.number().nonnegative(),
  S: z.number().nonnegative(),
  M: z.number().nonnegative(),
  L: z.number().nonnegative(),
  XL: z.number().nonnegative(),
  "2XL": z.number().nonnegative(),
})

const imageSchema = z.object({
  url: z.string(),
  description: z.string(),
})

export const POST = async (req: Request) => {
  try {
    // validate request body
    const schema = z.object({
      name: z.string().min(2),
      inv: z.string(),
      price: z.number().positive(),
      desc: z.object({
        material: z.string(),
        fit: z.string(),
      }),
      images: z.array(imageSchema),
      quantity: quantitySchema,
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("store")

    // add item to database
    const insert = await db.insertOne(body.data)
    if (!insert.acknowledged)
      return new NextResponse("Internal Server Error", { status: 500 })
    return new NextResponse("Inventory Item Inserted!", { status: 200 })
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
      name: z.string().min(2),
      price: z.number().positive(),
      desc: z.object({
        material: z.string(),
        fit: z.string(),
      }),
      quantity: quantitySchema,
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("store")

    // convert the string ID to a MongoDB ObjectId
    const { ObjectId } = require("mongodb")
    const testimonialId = new ObjectId(body.data.id)

    // attempt to update the testimonial
    const res = await db.updateOne(
      { _id: testimonialId },
      {
        $set: {
          name: body.data.name,
          price: body.data.price,
          desc: body.data.desc,
          quantity: body.data.quantity,
        },
      }
    )
    // Check if the update was successful
    if (!res.acknowledged || res.matchedCount === 0) {
      return new NextResponse("Inventory Item Not Found or Update Failed", {
        status: 404,
      })
    }
    return new NextResponse("Inventory Item Edited!", { status: 200 })
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
