"use client"

import Balancer from "react-wrap-balancer"

import { Icons } from "@/components/icons"

export default function About() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
        <div className="mb-4 items-center justify-center self-center text-center">
          <h1 className="self-center text-4xl font-semibold leading-tight md:text-5xl">
            <Balancer>
              THE <strong className="font-bold text-primary">WIL SANTI</strong>{" "}
              DIFFERENCE
            </Balancer>
          </h1>
          <h3 className="self-center text-2xl font-bold leading-tight">
            B.S., CSCS, CSPS, ACSM E-PHY, USAW 2, USATF I, USAPL SC, ISSN
          </h3>
        </div>
        <div className="mx-auto flex flex-col items-center justify-between self-center">
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.bs className="h-24 w-auto flex-none object-contain" />
            <p className="flex-1 text-center sm:text-right">
              <em className="text-primary">
                Bachelor of Science Degree in Exercise Science
              </em>{" "}
              from the University of Rhode Island.
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.cscs className="order-1 h-24 w-auto flex-none object-contain" />
            <p className="order-2 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-primary">
                Certified Strength and Conditioning Specialist (CSCS)
              </em>{" "}
              through the National Strength and Conditioning Association (NSCA).
              Certified to apply scientific knowledge to help improve athletic
              performance for athletes and health/fitness levels for those
              wanting to reach the peak of living a long, healthy life.
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.csps className="size-24" />
            <p className="flex-1 text-center sm:text-right">
              <em className="text-primary">
                Certified for Special Populations Specialist
              </em>{" "}
              through the National Strength and Conditioning Association (NSCA).
              Certified to assess, motivate, educate, and train special
              population clients of all ages regarding their health and fitness
              needs, those of whom have chronic and temporary health conditions
              (ex. heart disease, joint replacement, diabetes).
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.acsm className="order-1 h-24 w-auto flex-none object-contain" />
            <p className="order-1 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-primary">Certified Exercise Physiologist</em>{" "}
              through the American College of Sports Medicine (ACSM). Represents
              the gold standard by creating change for people throughout the
              entire training spectrum at an advanced level, conducting and
              interpreting physical assessments, and developing exercise
              prescriptions for those who are healthy or have medically
              controlled diseases.
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.usaw className="h-24 w-auto flex-none object-contain" />
            <p className="flex-1 text-center sm:text-right">
              <em className="text-primary">
                Certified USA Weightlifting Level 2 for Olympic and Functional
                Training
              </em>
              . Expert level of teaching and coaching for all Olympic lifts.
              Expert in teaching functional lifts and exercises for physical
              health and wellness.
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.usatf className="order-1 h-24 w-auto flex-none object-contain" />
            <p className="order-1 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-primary">
                Certified USA Track and Field Coach Level 1 for field and track
                events
              </em>
              . Expert in teaching and coaching sprint and speed training
              techniques for short, middle, and long-distance running events and
              NFL combine training.
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.usapl className="h-24 w-auto flex-none object-contain" />
            <p className="flex-1 text-center sm:text-right">
              <em className="text-primary">
                Certified USA Powerlifting Senior Coach
              </em>
              . Expert in teaching fundamentals, progression, variations, and
              techniques for the squat, bench press, and deadlift.
            </p>
          </span>
          <span className="my-8 flex w-full flex-col items-center justify-between gap-8 sm:max-h-24 sm:flex-row">
            <Icons.issn className="order-1 h-24 w-auto flex-none object-contain" />
            <p className="order-1 flex-1 text-center sm:order-none sm:text-left">
              <em className="text-primary">Certified Sports Nutritionist</em>{" "}
              with the working knowledge to take your fitness level or sports
              career to the next level. Personalized Nutrition guides are
              available to all clients.
            </p>
          </span>
        </div>
      </div>
    </section>
  )
}
