"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import type { Testimonial } from "@/types/Testimonial"
import { siteConfig } from "@/config/site"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"

const Title = () => (
  <>
    <motion.div
      variants={{
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h1 className="text-center text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
        {siteConfig.name.toUpperCase()}
      </h1>
    </motion.div>
    <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
      <Balancer>
        Nashville-based strength and speed coach and trainer with over two
        decades of experience - specializing in health/wellness/fitness
        training, speed and agility training, weight training, powerlifting,
        olympic lifts and plyometrics.
      </Balancer>
    </h3>
  </>
)

const Images = () => (
  <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 self-center md:flex-row">
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
        src="/portrait.webp"
        width={300}
        height={300}
        alt="Portrait"
        className="order-2 rounded-xl md:order-none"
      />
    </motion.div>
    <div className="order-1 flex items-center justify-center md:order-none md:flex-col">
      <motion.div
        variants={{
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Icons.Logo className="w-1/4 md:w-2/3" />
      </motion.div>
      <motion.div
        variants={{
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Icons.Weight className="md:w-96" />
      </motion.div>
    </div>
  </div>
)

const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([])

  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * idx,
      },
    }),
  }

  // get the testimonials from the database
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/testimonials")
      const data = await res.json()
      if (res.ok) setTestimonials(data)
    }
    fetchData()
  }, [])

  if (testimonials.length === 0)
    return (
      <section className="w-full">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What My Clients Say
              </div>
              <div className="text-muted-foreground">
                Hear from the people who have transformed their lives with my
                personal training.
              </div>
            </div>
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map(() => (
                <Skeleton className="size-[400px]" />
              ))}
            </div>
          </div>
        </div>
      </section>
    )

  return (
    <section className="w-full">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What My Clients Say
            </div>
            <div className="text-muted-foreground">
              Hear from the people who have transformed their lives with my
              personal training.
            </div>
          </div>
          <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((test, idx) => (
              <motion.div
                className="flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={idx}
              >
                <div />
                <CardContent className="text-base leading-relaxed sm:text-lg md:text-xl">
                  {test.quote}
                </CardContent>
                <CardFooter className="justify-center text-sm font-bold uppercase">
                  {test.name}
                </CardFooter>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function IndexPage() {
  return (
    <section className="mx-auto grid w-3/4 items-center gap-6 pb-8 pt-6 text-xl md:py-10">
      <div className="mx-auto flex flex-col items-center gap-8">
        <Title />
        <Images />
        <Testimonials />
      </div>
    </section>
  )
}
