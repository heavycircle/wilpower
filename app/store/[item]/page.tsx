"use client"

import React from "react"
import Image from "next/image"
import { AlertCircle } from "lucide-react"
import { useMediaQuery } from "react-responsive"
import Balancer from "react-wrap-balancer"

import type { Item } from "@/types/Item"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import Loading from "@/app/loading"

const Title = ({ name }: { name: string }) => (
  <h1 className="text-4xl font-bold md:text-5xl">
    <Balancer>{name}</Balancer>
  </h1>
)

const ItemVisual = ({ item }: { item: Item }) => {
  const [selected, setSelected] = React.useState<number>(0)
  const mobile = useMediaQuery({ maxWidth: 750 })
  const hidePrimary = useMediaQuery({ maxWidth: 1200 })

  return (
    <div className="col-span-2 flex flex-col items-center gap-10">
      {!hidePrimary && (
        <Image
          src={item.images[selected].url}
          alt={item.images[selected].description}
          width={600}
          height={600}
          className="size-[400px] rounded-xl"
        />
      )}
      {mobile ? (
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent className="items-center">
            {item.images.map((img) => (
              <CarouselItem key={img.description} className="basis-full">
                <Image
                  src={img.url}
                  alt={img.description}
                  width={570}
                  height={570}
                  className="h-full rounded-xl shadow-lg"
                  layout="responsive"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="flex gap-8">
          {item.images.map((img, idx) => (
            <Image
              key={img.description}
              src={img.url}
              alt={img.description}
              width={300}
              height={300}
              onClick={() => setSelected(idx)}
              className="rounded-xl shadow-lg xl:hover:scale-105 xl:hover:cursor-pointer xl:hover:border xl:hover:border-primary"
            />
          ))}
        </div>
      )}
    </div>
  )
}

const sizes = ["XS", "S", "M", "L", "XL", "2XL"]

const PurchaseForm = ({ item }: { item: Item }) => {
  const [size, setSize] = React.useState<string>()
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()
  const { addToCart } = useCart()

  const submit = () => {
    if (size) {
      addToCart({
        name: item.name,
        quantity: 1,
        size: size,
        price: item.price,
      })
      setSuccess("Item added to cart!")
      setTimeout(() => setSuccess(""), 3000)
    } else {
      setError("Please select a size!")
      setTimeout(() => setError(""), 3000)
    }
  }

  return (
    <div className="flex w-full flex-col gap-10">
      {error && (
        <Alert
          variant="destructive"
          className="absolute left-1/2 top-20 z-20 mx-auto w-1/2 -translate-x-1/2 bg-destructive/60 text-foreground transition-all ease-out"
        >
          <AlertCircle className="size-4" color="hsl(var(--foreground))" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert
          variant="success"
          className="absolute left-1/2 top-20 z-20 mx-auto w-1/2 -translate-x-1/2 bg-success/60 text-foreground transition-all ease-out"
        >
          <AlertCircle className="size-4" color="hsl(var(--foreground))" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col items-center justify-around gap-4 md:flex-row xl:flex-col xl:items-start">
        <h2 className="text-xl">Size:</h2>
        <div className="flex w-full justify-between md:justify-center md:gap-8 xl:gap-4">
          {sizes.map((s) => (
            <Button
              key={s}
              variant={size === s ? "default" : "outline"}
              onClick={() => setSize(s)}
              className="w-10 md:w-12"
            >
              {s}
            </Button>
          ))}
        </div>
      </div>
      <Button className="mx-auto w-3/4" onClick={submit}>
        Add to Cart
      </Button>
    </div>
  )
}

const ItemDescription = ({ item }: { item: Item }) => (
  <div className="flex flex-col gap-4">
    <p>
      <strong className="font-semibold uppercase">Material</strong>:{" "}
      {item.desc.material}
    </p>
    <p>
      <strong className="font-semibold uppercase">Fit</strong>: {item.desc.fit}
    </p>
  </div>
)

const ItemSpecs = ({ item }: { item: Item }) => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <Title name={item.name} />
      <h3 className="text-xl tracking-wider text-muted-foreground">
        {"$" + item.price}
      </h3>
      <Separator />
      <PurchaseForm item={item} />
      <ItemDescription item={item} />
    </div>
  )
}

export default function StoreItem({
  params,
}: Readonly<{ params: { item: string } }>) {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [item, setItem] = React.useState<Item>()

  // get the item data
  React.useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`/api/store/${params.item}`)
      if (res.ok) setItem(await res.json())
    }
    fetchItem().then(() => setLoading(false))
  }, [params.item])

  if (!item) return <Loading />
  if (loading) return <Loading />

  return (
    <section className="mx-auto grid w-3/4 items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-10 xl:grid xl:grid-cols-3">
        <ItemVisual item={item} />
        <ItemSpecs item={item} />
      </div>
    </section>
  )
}
