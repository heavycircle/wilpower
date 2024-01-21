import Image from "next/image"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

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
          <Image src="/portrait.webp" width={300} height={300} alt="Portrait" className="order-2 md:order-none" />
          <div className="order-1 flex items-center justify-center md:order-none md:flex-col">
            <Icons.logo className="w-1/4 md:w-2/3" />
            <Icons.weight className="w-3/4 md:w-96" />
          </div>
        </div>
        <h3 className="self-center text-center  text-2xl font-medium leading-tight">
          Speed/Agility Training
        </h3>
        <h3 className="self-center text-center text-2xl font-medium leading-tight">
          Weight, Power, and Plyometric Training
        </h3>
        <h3 className="self-center text-center  text-2xl font-medium leading-tight">
          Nutrition
        </h3>
        <h3 className="self-center text-2xl font-medium leading-tight">
          Training Location
        </h3>
      </div>
    </section>
  )
}
