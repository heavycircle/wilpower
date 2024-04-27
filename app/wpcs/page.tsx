"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import Balancer from "react-wrap-balancer"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Icons } from "@/components/icons"

const PhotoCarousel = () => (
  <Carousel
    opts={{ align: "center", loop: true }}
    plugins={[
      Autoplay({
        delay: 5000,
      }),
    ]}
  >
    <CarouselContent className="items-center">
      {Array.from(Array(6).keys(), (key) => key + 1).map((num) => (
        <CarouselItem
          key={num}
          className="basis-full md:basis-1/2 lg:basis-1/3"
        >
          <Image
            src={`/wpcs-carousel/wpcs-${num}.jpg`}
            alt={`Sport ${num}`}
            height={934}
            width={934}
            className="h-full w-auto"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

export default function WPCS() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
        <div className="items-center justify-center self-center text-center">
          <h1 className="self-center text-4xl font-bold leading-tight">
            <Balancer>
              THE{" "}
              <strong className="text-primary">WIL POWER CHAMPIONSHIP</strong>{" "}
              SERIES
            </Balancer>
          </h1>
        </div>
        <Icons.Weight className="w-72 self-center" />
        <p className="text-balance text-center">
          The <em className="text-primary">WPCS</em> is a challenge for the Wil
          Power Championship belt. Every 3 to 4 months, the championship belt is
          put up for grabs. To win the belt, you must win the month-long
          challenge. All athletes and clients who actively train with Wil Power
          Sports Training are eligible to compete. Those who choose to compete
          in the challenge are granted one attempt per training session running
          through the whole month of the challenge. It is the ultimate test of
          physical and mental toughness, and those fortunate to win the
          championship belt exemplify those attributes. The one who wins the
          belt keeps it till the next challenge as they fight to retain their
          title. Should the current champion lose, the belt will be handed off
          and awarded to the winner of the current challenge, and so begins
          their reign as Wil Power Champion.
        </p>
        <Image
          className="mt-5 self-center"
          src="/wpcs/wpcs.webp"
          alt="WPCS Belt"
          width={500}
          height={500}
        />
        <PhotoCarousel />
      </div>
    </section>
  )
}
