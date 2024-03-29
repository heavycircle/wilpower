"use client"

import { CheckCircle } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

const Title = () => (
  <>
    <Icons.logo className="w-1/6" />
    <h1 className="self-center text-center text-3xl font-bold italic leading-tight sm:text-4xl md:text-5xl">
      <Balancer>
        &quot;What the Mind can Conceive, the Body can Achieve.&quot;
      </Balancer>
    </h1>
    <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
      <Balancer>
        Specialized training programs designed specifically for each person. All
        conducted training and designed programs are by Wil Santi.
      </Balancer>
    </h3>
  </>
)

const LongText = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold">Fitness Training</h2>
      <Balancer className="col-span-2 text-center">
        Take your health to the next level and truly see how great you can be.
        Included training types are kettlebell, interval, metabolic, 300
        work-out, strength and functional, core, boot-camp, and cardio
        conditioning.
      </Balancer>
    </div>
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold">Wellness Coaching</h2>
      <Balancer className="col-span-2 text-center">
        Learn how to build healthy habits and implement them into your life.
        Learn how to manage your time to fit in a health and exercise program
        specific to your needs and goals.
      </Balancer>
    </div>
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold">
        Nutrition Counseling
      </h2>
      <Balancer className="col-span-2 text-center">
        As a certified nutritionist, I will write and provide you with custom
        nutrition counseling and a guide specific to you and your needs.
      </Balancer>
    </div>
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold">
        Corrective, Rehabilitative, or Special Populations Training
      </h2>
      <Balancer className="col-span-2 text-center">
        Training for chronic problems, disabilities, bodily alignment, joint
        replacement, joint repair, illness, and disease.
      </Balancer>
    </div>
  </div>
)

export default function FitnessWellness() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8">
        <Title />
        <LongText />
      </div>
    </section>
  )
}
