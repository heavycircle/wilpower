"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Balancer from "react-wrap-balancer"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const Title = () => (
  <h1 className="self-center text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
    <Balancer>Wil Power Merchandise</Balancer>
  </h1>
)

interface ImageProps {
  url: string
  description: string
}

interface ItemProps {
  name: string
  price: number
  images: ImageProps[]
}

const Store = () => {
  const [store, setStore] = React.useState<ItemProps[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  // get the store
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/store")
      const data = await res.json()
      console.log("data", data)
      if (res.ok) setStore(data)
    }
    fetchData().then(() => setLoading(false))
  }, [])

  return <div className="grid w-3/4 grid-cols-2 justify-center gap-16"></div>
}

export default function SportTraining() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8">
        <Title />
        <Store />
      </div>
    </section>
  )
}
