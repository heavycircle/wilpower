"use strict"

import { NextResponse } from "next/server"
import { z } from "zod"

import clientPromise from "@/lib/mongodb"

export const POST = async (req: Request) => {
  try {
    // validate request body
    const schema = z.object({
      name: z.string(),
      quote: z.string(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("testimonials")

    // add testimonial to database
    const insert = await db.insertOne(body.data)
    if (!insert.acknowledged)
      return new NextResponse("Internal Server Error", { status: 500 })
    return new NextResponse("Testimonial Inserted!", { status: 200 })
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
      name: z.string(),
      quote: z.string(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("testimonials")

    // convert the string ID to a MongoDB ObjectId
    const { ObjectId } = require("mongodb")
    const testimonialId = new ObjectId(body.data.id)

    // attempt to update the testimonial
    const res = await db.updateOne(
      { _id: testimonialId },
      { $set: { name: body.data.name, quote: body.data.quote } }
    )
    // Check if the update was successful
    if (!res.acknowledged || res.matchedCount === 0) {
      return new NextResponse("Testimonial Not Found or Update Failed", {
        status: 404,
      })
    }
    return new NextResponse("Testimonial Edited!", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export const GET = async (req: Request) => {
  try {
    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("testimonials")

    // get all the testimonials
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

export const DELETE = async (req: Request) => {
  try {
    // validate request body
    const schema = z.object({
      id: z.string(),
      name: z.string(),
      quote: z.string(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // connect to the database
    const client = await clientPromise
    const db = client.db("wilpower").collection("testimonials")

    // convert the string ID to a MongoDB ObjectId
    const { ObjectId } = require("mongodb")
    const testimonialId = new ObjectId(body.data.id)

    // attempt to delete the testimonial
    const res = await db.deleteOne({ _id: testimonialId })
    // Check if the delete was successful
    if (!res.acknowledged) {
      return new NextResponse("Testimonial Not Found", {
        status: 404,
      })
    }
    return new NextResponse("Testimonial Deleted!", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
