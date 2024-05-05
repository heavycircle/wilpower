"use strict"

import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { ApiError, Client, Environment } from "square"
import { z } from "zod"

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
})

async function submitPayment(sourceId, total) {
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

export const POST = async (req) => {
  try {
    const cartSchema = z.object({
      name: z.string(),
      quantity: z.number(),
      size: z.string(),
      price: z.number(),
    })
    // validate request body
    const schema = z.object({
      token: z.string(),
      total: z.number(),
      cartItems: z.array(cartSchema).min(1),
    })
    const body = schema.safeParse(await req.json())
    if (!body.success)
      return new NextResponse("Invalid Request Format", { status: 400 })

    // submit the payment
    const res = await submitPayment(body.data.token, body.data.total)
    if (!res)
      return new NextResponse(
        JSON.stringify({
          detail: "Unable to Process Payment. Please try again.",
        }),
        { status: 500 }
      )
    else if (res.errors)
      return new NextResponse(JSON.stringify(res.errors[0]), { status: 500 })

    // send happy
    return new NextResponse(JSON.stringify(res.payment), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
