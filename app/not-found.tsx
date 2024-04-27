"use client"

import Image from "next/image"
import Balancer from "react-wrap-balancer"

export default function NotFound() {
  return (
    <div className="absolute left-1/2 top-1/3 flex w-3/4 -translate-x-1/2 -translate-y-1/3 flex-col items-center justify-center gap-8">
      <Image src="/logo-white.png" alt="Not Found" width={200} height={200} />
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold">
          <Balancer>The page you requested could not be found.</Balancer>
        </h1>
        <h2 className="text-2xl font-semibold italic text-muted-foreground">
          Use the navigation bar to find your way back.
        </h2>
      </div>
    </div>
  )
}
