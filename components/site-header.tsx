"use client"

import { useMediaQuery } from "react-responsive"

import { DesktopHeader } from "@/components/nav-desktop"
import { MobileHeader } from "@/components/nav-mobile"

export function SiteHeader() {
  const mobile = useMediaQuery({ maxWidth: 900 })
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {mobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  )
}
