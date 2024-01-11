import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="self-center text-5xl font-bold leading-tight">{siteConfig.name.toUpperCase()}</h1>
        <div className="mx-auto flex items-center justify-between self-center">
          <Icons.logo className="w-1/4" />
          <Icons.weight className="w-3/4" />
        </div>
      </div>
    </section>
  )
}
