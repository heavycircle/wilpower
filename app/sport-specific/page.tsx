"use client"

import Image from "next/image"
import Link from "next/link"
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
    <CarouselContent>
      {Array.from(Array(11).keys(), (key) => key + 1).map((num) => (
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
              src={`/sport-carousel/sport-${num}.jpg`}
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

const Title = () => (
  <>
    <Icons.Logo className="w-1/6" />
    <h1 className="self-center text-center text-3xl font-bold italic leading-tight sm:text-4xl md:text-5xl">
      <Balancer>&quot;Compete to Be Elite&quot;</Balancer>
    </h1>
    <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
      <Balancer>
        Sport-specific performance training and Specialized training programs
        designed specifically for each athlete. All training sessions are
        conducted, and programs are written and expertly designed by WIL SANTI.
      </Balancer>
    </h3>
  </>
)

const LongText = () => (
  <div className="flex flex-col gap-4 text-xl">
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>Starts at ages 7 and up</li>
      <li>
        Training for all levels of athletic ability, from the first-year player
        to elite high school, college, and professional athletes
      </li>
      <li>Group and team training, one on one, one on two, and up</li>
    </ul>
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h3 className="text-center text-3xl font-semibold text-primary">
          Speed and Agility Training
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Assessment of current flexibility level, running technique, stride
            length and power
          </li>
          <li>
            Individual-video study of speed, agility, plyometric and
            weight-training technique
          </li>
          <li>
            Dynamic warm-up movement, emphasizing increased flexibility and
            speed/agility enhancement
          </li>
          <li>
            Field work including- form running progression, proper foot strike,
            knee drive and arm action
          </li>
          <li>
            Agility training, including- change of direction and reaction time
            drills specific to demands of each sport
          </li>
        </ul>
      </div>
      <motion.div
        variants={{
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Image
          src="/sport-carousel/main-1.jpg"
          alt="Speed and Agility"
          height={500}
          width={500}
          className="mx-auto rounded-xl"
        />
      </motion.div>
    </div>
    <div className="grid items-center gap-8 md:grid-cols-2">
      <motion.div
        variants={{
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Image
          src="/sport-carousel/main-2.jpg"
          alt="Power Training"
          height={500}
          width={500}
          className="order-1 mx-auto rounded-xl"
        />
      </motion.div>
      <div className="order-none flex flex-col gap-4 md:order-2">
        <h3 className="text-balance text-center text-3xl font-semibold text-primary">
          Weight, Power, and Plyometric Training
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Assessment of current strength level, identification of weaknesses
            in core, lower body and upper body strength
          </li>
          <li>
            Proper form, technique and progression taught in explosive lifts and
            plyometric exercises (jump training)
          </li>
          <li>
            Foam rolling technique and proper warm-up and cool-down implemented
            in each athletes work-out program
          </li>
        </ul>
      </div>
    </div>
    <h3 className="text-center text-3xl font-semibold text-primary">
      Nutrition
    </h3>
    <p className="text-center">
      Sports nutrition advice and counseling also available.
    </p>
    <PhotoCarousel />
    <h3 className="text-center text-3xl font-semibold text-primary">
      Training Location
    </h3>
    <p>
      I utilize facilities in and around the Nashville area and can train at a
      facility that best suits your schedule and type of training. I&apos;m also
      available to train school teams at their facilities or at local athletic
      fields and tracks.
    </p>
    <Link href="/contact" className="flex justify-center">
      <p className="link w-min text-center text-xl font-medium italic">
        Contact now for a free consultation!
      </p>
    </Link>
  </div>
)

export default function SportTraining() {
  return (
    <section className="mx-auto grid w-11/12 items-center gap-6 pb-8 pt-6 text-xl md:w-3/4 md:py-10">
      <div className="mx-auto flex flex-col items-center gap-8">
        <Title />
        <LongText />
      </div>
    </section>
  )
}
