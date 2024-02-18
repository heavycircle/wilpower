"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="self-center text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {siteConfig.name.toUpperCase()}
        </h1>
        <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
          Nashville-based personal trainer with over two decades of experience -
          specializing in speed and agility training, weight training,
          powerlifting and plyometrics.
        </h3>
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
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-semibold">
                  Speed and Agility Training
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 grid gap-4">
                <div className="text-right mt-2">
                  <div className="grid-cols-5 grid justify-center items-center">
                    <div className="flex items-center">
                      <CheckCircle className="w-7 h-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Assessment of current flexibility level, running
                      technique, stride length and power
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid-cols-5 grid">
                    <div className="flex items-center">
                      <CheckCircle className="w-7 h-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Individual-video study of speed, agility, plyometric and
                      weight-training technique{" "}
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid-cols-5 grid">
                    <div className="flex items-center">
                      <CheckCircle className="w-7 h-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Dynamic warm-up movement, emphasizing increased
                      flexibility and speed/agility enhancement{" "}
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid-cols-5 grid">
                    <div className="flex items-center">
                      <CheckCircle className="w-7 h-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Field work including- form running progression, proper
                      foot strike, knee drive and arm action
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid-cols-5 grid">
                    <div className="flex items-center">
                      <CheckCircle className="w-7 h-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Agility training, including- change of direction and
                      reaction time drills specific to demands of each sport
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-semibold">
                  Nutrition
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 pt-0">
                <div className="mt-2 text-right">
                  <div className="grid grid-cols-5 items-center justify-center">
                    <div className="flex items-center">
                      <CheckCircle className="h-7 w-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Individualized nutrition program designed to meet each
                      athletes specific needs
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-5">
                    <div className="flex items-center">
                      <CheckCircle className="h-7 w-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Nutritional supplements recommended to enhance performance
                      and recovery
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
                  Weight, Power, & Plyometric Training
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
                      Proper form, technique and progression taught in explosive
                      lifts and plyometric exercises (jump training)
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
                  Training Location
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 pt-0">
                <div className="mt-2 text-right">
                  <div className="grid grid-cols-5 items-center justify-center">
                    <div className="flex items-center">
                      <CheckCircle className="size-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      Training sessions are held at the athlete&apos;s home,
                      school, or designated training facility
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-5">
                    <div className="flex items-center">
                      <CheckCircle className="size-7" color={"#facc15"} />
                    </div>
                    <p className="col-span-4">
                      I utilize facilities in and around the Nashville area and
                      can train at a facility that best suits your schedule and
                      type of training
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
      </div>
    </section>
  )
}
