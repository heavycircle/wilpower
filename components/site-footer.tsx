"use client"

import Link from "next/link"

export function SiteFooter() {
  return (
    <div className="my-4 ml-10">
      <p className="text-sm font-medium text-muted-foreground">
        Designed 2024 by{" "}
        <Link href="https://github.com/thecae">Cole Ellis</Link>.{" "}
        <Link href="https://github.com/thecae/wilpower">Repository public</Link>
        .
      </p>
    </div>
  )
}
