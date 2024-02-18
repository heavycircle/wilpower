"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import Balancer from "react-wrap-balancer"
import Autoplay from "embla-carousel-autoplay"

import { siteConfig } from "@/config/site"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

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

const Cards = () => (
  <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
    <div className="flex flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Speed and Agility Training</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Assessment of current flexibility level, running technique,
                stride length and power
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Individual-video study of speed, agility, plyometric and
                weight-training technique{" "}
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Dynamic warm-up movement, emphasizing increased flexibility and
                speed/agility enhancement{" "}
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Field work including- form running progression, proper foot
                strike, knee drive and arm action
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Agility training, including- change of direction and reaction
                time drills specific to demands of each sport
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Nutrition</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Individualized nutrition program designed to meet each athletes
                specific needs
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Nutritional supplements recommended to enhance performance and
                recovery
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="flex flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Weight, Power, & Plyometric Training</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Assessment of current strength level, identification of
                weaknesses in core, lower body and upper body strength
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Proper form, technique and progression taught in explosive lifts
                and plyometric exercises (jump training)
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Foam rolling technique and proper warm-up and cool-down
                implemented in each athletes work-out program
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Training Location</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Training sessions are held at the athlete&apos;s home, school,
                or designated training facility
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                I utilize facilities in and around the Nashville area and can
                train at a facility that best suits your schedule and type of
                training
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                I&apos;m also available to train school teams at their
                facilities or at local athletic fields and tracks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
)

const Testimonials = () => (
  <div className="mx-auto flex w-5/6 flex-col justify-center gap-4">
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
            <Card className="flex h-full flex-col justify-between">
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
        <Cards />
        <Testimonials />
      </div>
    </section>
  )
}
