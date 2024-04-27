"use strict"

import { NextResponse } from "next/server"
import { z } from "zod"

const nodemailer = require("nodemailer")

export const POST = async (req: Request) => {
  // validate request body
  const schema = z.object({
    name: z.string().min(2, {
      message: "This doesn't seem like a correct name. Please try again.",
    }),
    email: z.string().email().min(2, {
      message: "Invalid Email Address.",
    }),
    goals: z.string().min(2, {
      message: "Please enter your program goals here!",
    }),
    questions: z.string().optional(),
    age: z.string(),
    level: z.string().min(2, {
      message: "Please enter your fitness level here!",
    }),
    routine: z.string().min(2, {
      message: "Please enter your current routine here!",
    }),
    training: z.enum(["group", "individual"]).superRefine((val, ctx) => {
      if (!["group", "individual"].includes(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Training must be either 'group' or 'individual'.",
        })
      }
    }),
  })
  const body = schema.safeParse(await req.json())
  if (!body.success)
    return new NextResponse("Invalid Request Format", { status: 400 })

  try {
    // register nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const template = `
<h1>New Form Submission!</h1>
<p>Name: ${body.data.name}</p>
<p>Email: ${body.data.email}</p>
<p>Age: ${body.data.age}</p>
<br />
<p>Level: ${body.data.level}</p>
<p>Training Type: ${body.data.training}</p>
<p>Routine: ${body.data.routine}</p>
<p>Goals: ${body.data.goals}</p>
<br />
<p>Questions: ${body.data.questions}</p>`

    // send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DELIVER,
      replyTo: body.data.email,
      subject: "WIL POWER: New Form Submission!",
      html: template,
    })

    return new NextResponse("Submitted successfully!", { status: 200 })
  } catch (error) {
    return new NextResponse("Could Not Send Message", { status: 500 })
  }
}
