"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Balancer from "react-wrap-balancer"

import { Icons } from "@/components/icons"

function EnterLeft({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const motionProps = {
    initial: { x: -400, opacity: 0 },
    animate: isInView ? { x: 0, opacity: 1 } : {},
    transition: { type: "spring", stiffness: 100, damping: 10 },
  }

  return (
    <section ref={ref} className={className}>
      <motion.div {...motionProps}>{children}</motion.div>
    </section>
  )
}

function EnterRight({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const motionProps = {
    initial: { x: 400, opacity: 0 },
    animate: isInView ? { x: 0, opacity: 1 } : {},
    transition: { type: "spring", stiffness: 100, damping: 10 },
  }

  return (
    <section ref={ref} className={className}>
      <motion.div {...motionProps}>{children}</motion.div>
    </section>
  )
}

export default function About() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
        <div className="mb-4 items-center justify-center self-center text-center">
          <h1 className="self-center text-4xl font-semibold leading-tight md:text-6xl">
            <Balancer>
              THE <strong className="font-bold text-primary">WIL SANTI</strong>{" "}
              DIFFERENCE
            </Balancer>
          </h1>
          <h3 className="self-center text-2xl font-bold leading-tight">
            M.S., B.S., RSCC, CSCS, CSPS, ACSM E-PHY, USAW 2, USATF I, USAPL SC,
            ISSN
          </h3>
        </div>

        <div className="mx-auto flex flex-col items-center justify-between self-center">
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterLeft className="flex-none object-contain">
              <Icons.MS className="h-44 w-auto" />
            </EnterLeft>
            <EnterRight className="flex-1 text-center sm:text-right">
              <em className="text-balance text-primary">
                Masters of Sport and Human Movement Degree
              </em>{" "}
              from Cumberland University.
            </EnterRight>
          </span>

          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterRight className="order-1 flex-none object-contain">
              <Icons.BS className="h-44 w-auto" />
            </EnterRight>
            <EnterLeft className="order-2 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-balance text-primary">
                Bachelor of Science Degree in Exercise Science
              </em>{" "}
              from the University of Rhode Island.
            </EnterLeft>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterLeft className="flex-none object-contain">
              <Icons.RSCC className="h-44 w-auto" />
            </EnterLeft>
            <EnterRight className="flex-1 text-center sm:text-right">
              <em className="text-balance text-primary">
                Registered Strength and Conditioning Coach
              </em>{" "}
              through the National Strength and Conditioning Association (NSCA).
              Certified to apply advanced knowledge to assess, motivate,
              educate, and train athletes for the primary goal of improving
              sport performance.
            </EnterRight>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterRight className="order-1 flex-none object-contain">
              <Icons.CSCS className="h-44 w-auto" />
            </EnterRight>
            <EnterLeft className="order-2 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-balance text-primary">
                Certified Strength and Conditioning Specialist (CSCS)
              </em>{" "}
              through the National Strength and Conditioning Association (NSCA).
              Certified to apply scientific knowledge to help improve athletic
              performance for athletes and health/fitness levels for those
              wanting to reach the peak of living a long, healthy life.
            </EnterLeft>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterLeft className="flex-none object-contain">
              <Icons.CSPS className="h-44 w-auto" />
            </EnterLeft>
            <EnterRight className="flex-1 text-center sm:text-right">
              <em className="text-balance text-primary">
                Certified for Special Populations Specialist
              </em>{" "}
              through the National Strength and Conditioning Association (NSCA).
              Certified to assess, motivate, educate, and train special
              population clients of all ages regarding their health and fitness
              needs, those of whom have chronic and temporary health conditions
              (ex. heart disease, joint replacement, diabetes).
            </EnterRight>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterRight className="order-1 flex-none object-contain">
              <Icons.ACSM className="h-44 w-auto" />
            </EnterRight>
            <EnterLeft className="order-1 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-balance text-primary">
                Certified Exercise Physiologist
              </em>{" "}
              through the American College of Sports Medicine (ACSM). Represents
              the gold standard by creating change for people throughout the
              entire training spectrum at an advanced level, conducting and
              interpreting physical assessments, and developing exercise
              prescriptions for those who are healthy or have medically
              controlled diseases.
            </EnterLeft>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterLeft className="flex-none object-contain">
              <Icons.USAW className="h-44 w-auto" />
            </EnterLeft>
            <EnterRight className="flex-1 text-center sm:text-right">
              <em className="text-balance text-primary">
                Certified USA Weightlifting Level 2 for Olympic and Functional
                Training
              </em>
              . Expert level of teaching and coaching for all Olympic lifts.
              Expert in teaching functional lifts and exercises for physical
              health and wellness.
            </EnterRight>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterRight className="order-1 flex-none object-contain">
              <Icons.USATF className=" h-44 w-auto" />
            </EnterRight>
            <EnterLeft className="order-1 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-balance text-primary">
                Certified USA Track and Field Coach Level 1 for field and track
                events
              </em>
              . Expert in teaching and coaching sprint and speed training
              techniques for short, middle, and long-distance running events and
              NFL combine training.
            </EnterLeft>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterLeft>
              <Icons.USAPL className="h-44 w-auto flex-none object-contain" />
            </EnterLeft>
            <EnterRight className="flex-1 text-center sm:text-right">
              <em className="text-balance text-primary">
                Certified USA Powerlifting Senior Coach
              </em>
              . Expert in teaching fundamentals, progression, variations, and
              techniques for the squat, bench press, and deadlift.
            </EnterRight>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-44 sm:flex-row">
            <EnterRight className="order-1 flex-none object-contain">
              <Icons.ISSN className="h-44 w-auto" />
            </EnterRight>
            <EnterLeft className="order-1 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-balance text-primary">
                Certified Sports Nutritionist
              </em>{" "}
              with the working knowledge to take your fitness level or sports
              career to the next level. Personalized Nutrition guides are
              available to all clients.
            </EnterLeft>
          </span>
        </div>
      </div>
    </section>
  )
}
