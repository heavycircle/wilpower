"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import type { Item } from "@/types/Item"
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

const StoreItem = ({ item, idx }: { item: Item; idx: number }) => {
  const router = useRouter()
  return (
    <motion.div
      variants={{
        initial: { y: -100, opacity: 0 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            delay: 0.05 * idx,
          },
        },
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.1 },
        },
      }}
      initial="initial"
      whileInView="animate"
      whileHover="whileHover"
      viewport={{ once: true }}
      className="flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm duration-500 hover:cursor-pointer hover:text-primary"
      onClick={() => router.push(`/store/${item.inv}`)}
    >
      <CardHeader className="m-0 p-0 pb-4">
        <Image
          src={process.env.NEXT_PUBLIC_AWS_URL + item.images[0].url}
          alt={item.images[0].description}
          width={2000}
          height={275}
          className="w-auto rounded-xl"
        />
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <CardTitle>{item.name}</CardTitle>
        <CardDescription className="line-clamp-2">{item.price}</CardDescription>
      </CardContent>
    </motion.div>
  )
}

const StorePlaceholder = () => (
  <div className="flex w-3/4 justify-center gap-16">
    {[1, 2].map((i) => (
      <Card className="flex w-full flex-col justify-between" key={i}>
        <CardHeader className="m-0 p-0 pb-4">
          <Skeleton className="h-[275px] w-80 rounded-xl" />
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Skeleton className="h-10 w-48 rounded-full" />
          <Skeleton className="h-8 w-10 rounded-full" />
        </CardContent>
      </Card>
    ))}
  </div>
)

const Store = () => {
  const [store, setStore] = React.useState<Item[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  // get the store
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/store")
      const data = await res.json()
      if (res.ok) setStore(data)
    }
    fetchData().then(() => setLoading(false))
  }, [])

  if (loading) return <StorePlaceholder />

  return (
    <div className="grid w-3/4 justify-center gap-16 md:grid-cols-2">
      {store.map((item, idx) => (
        <StoreItem key={item.name} item={item} idx={idx} />
      ))}
    </div>
  )
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
