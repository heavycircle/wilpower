"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
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
    className="mx-auto w-3/4"
  >
    <CarouselContent className="items-center">
      {Array.from(Array(6).keys(), (key) => key + 1).map((num) => (
        <CarouselItem
          key={num}
          className="basis-full md:basis-1/2 lg:basis-1/3"
        >
          <motion.div
            variants={{
              initial: { y: -100, opacity: 0 },
              animate: (idx: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.05 * idx,
                },
              }),
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={num}
          >
            <Image
              src={`/wpcs-carousel/wpcs-${num}.jpg`}
              alt={`Sport ${num}`}
              height={934}
              width={934}
              className="h-full rounded-xl"
            />
          </motion.div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

export default function WPCS() {
  return (
    <section className="mx-auto grid w-11/12 items-center gap-6 pb-8 pt-6 text-xl md:w-3/4 md:py-10">
      <div className="mx-auto flex flex-col items-center gap-8">
        <div className="items-center justify-center self-center text-center">
          <h1 className="self-center text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <Balancer>
              THE{" "}
              <strong className="text-primary">WIL POWER CHAMPIONSHIP</strong>{" "}
              SERIES
            </Balancer>
          </h1>
        </div>
        <div className="flex w-full flex-col items-center justify-between sm:w-11/12 md:w-3/4 md:flex-row lg:w-2/3">
          <motion.div
            variants={{
              initial: { x: -100, opacity: 0 },
              animate: { opacity: 1, x: 0 },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-10"
          >
            <Icons.Weight className="h-auto w-full min-w-72" />
          </motion.div>
          <motion.div
            variants={{
              initial: { x: 100, opacity: 0 },
              animate: { opacity: 1, x: 0 },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-10"
          >
            <Image
              src="/wpcs/wpcs.png"
              alt="WPCS Belt"
              width={500}
              height={500}
              layout="responsive"
              className="responsive-image"
            />
          </motion.div>
        </div>
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
        <PhotoCarousel />
      </div>
    </section>
  )
}
