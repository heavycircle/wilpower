"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Balancer from "react-wrap-balancer"

import { Icons } from "@/components/icons"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { siteConfig } from "@/config/site"

const Title = () => (
  <>
    <h1 className="self-center text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
      <Balancer>{siteConfig.name.toUpperCase()}</Balancer>
    </h1>
    <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
      <Balancer>
        Nashville-based personal trainer with over two decades of experience -
        specializing in speed and agility training, weight training,
        powerlifting and plyometrics.
      </Balancer>
    </h3>
  </>
)

const Images = () => (
  <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 self-center md:flex-row">
    <Image
      src="/portrait.webp"
      width={300}
      height={300}
      alt="Portrait"
      className="order-2 md:order-none"
    />
    <div className="order-1 flex items-center justify-center md:order-none md:flex-col">
      <Icons.logo className="w-1/4 md:w-2/3" />
      <Icons.weight className="w-3/4 md:w-96" />
    </div>
  </div>
)

const Testimonials = () => (
  <div className="mx-auto hidden w-5/6 justify-center gap-4 md:flex md:flex-col">
    <h2 className="text-center text-3xl font-semibold">Testimonials</h2>
    <Carousel
      opts={{ align: "center", loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {siteConfig.testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.name}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <Card className="flex size-full flex-col justify-between object-contain">
              <CardHeader />
              <CardContent
                className="flex items-center justify-center text-center 
              text-lg italic xl:text-xl"
              >
                {testimonial.quote}
              </CardContent>
              <CardFooter className="flex justify-center text-center text-xs uppercase">
                {testimonial.name}
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2">
        <Title />
        <Images />
        <Testimonials />
      </div>
    </section>
  )
}
