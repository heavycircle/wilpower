"use strict"

import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { ApiError, Client, Environment } from "square"
import { z } from "zod"

function serializeBigInt(bigintValue: BigInt): string {
  return bigintValue.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
})

async function submitPayment(sourceId: string, total: number) {
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: "USD",
        amount: BigInt(Math.round(100 * total)),
      },
    })
    return result
  } catch (error) {
    if (error instanceof ApiError) console.error("API Error:", error.errors)
    else console.error("Unexpected Error:", error)
  }
}

export const POST = async (req: Request) => {
  try {
    // validate request body
    const schema = z.object({
      token: z.string(),
      total: z.number(),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    console.log(body.data)

    // submit the payment
    const res = await submitPayment(body.data.token, body.data.total)
    if (!res) return new NextResponse("Payment Failed", { status: 500 })
    console.log(res)

    // send happy
    return new NextResponse("Payment Success!", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
