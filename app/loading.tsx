"use client"

import * as React from "react"
import Image from "next/image"

const Spinner = () => (
  <svg className="size-80 animate-spin" viewBox="0 0 60 60">
    <circle
      cx="30"
      cy="30"
      r="32"
      fill="none"
      strokeWidth="3"
      stroke="white"
    ></circle>
  </svg>
)

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <div className="relative m-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={"/logo-white.png"} width={250} height={250} alt="Logo" />
        </div>
        <Spinner />
      </div>
    </div>
  )
}
