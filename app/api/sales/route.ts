"use strict"

import { NextResponse } from "next/server"

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
