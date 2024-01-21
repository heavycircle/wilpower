"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMediaQuery } from "react-responsive"

import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"

const MobileHeader = () => {
  const router = useRouter()
  return (
    <Sheet>
      <div className="flex w-full items-center justify-between px-4 py-3">
        <SheetTrigger>
          <Menu className="h-10 w-10" />
        </SheetTrigger>
        <h2 className="grow text-center text-2xl font-bold leading-tight sm:text-3xl">
          {siteConfig.name.toUpperCase()}
        </h2>
        <ThemeToggle />
      </div>
      <SheetContent side={"left"}>
        <SheetHeader className="my-4">
          <SheetTitle>
            <Link href="/" className="flex items-center justify-center gap-4">
              <Icons.logo className="h-8 w-8" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </Link>
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-2 text-muted-foreground">
            <Button
              onClick={() => router.push("/about")}
              rel="noreferrer"
              className="w-full"
              variant={"ghost"}
            >
              About
            </Button>
            <Button
              onClick={() => router.push("/wpcs")}
              rel="noreferrer"
              className="w-full"
              variant={"ghost"}
            >
              WP Championship Series
            </Button>
            <div className="mx-auto flex w-3/4 items-center justify-between">
              <Link
                href={siteConfig.links.phone}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.phone className="h-5 w-5" />
                  <span className="sr-only">Call Us!</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.mail}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

const DesktopHeader = () => (
  <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {siteConfig.mainNav?.length ? (
        <nav className="flex gap-6">
          {siteConfig.mainNav?.map(
            (item: NavItem, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1">
        <Link href={siteConfig.links.phone} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.phone className="h-5 w-5" />
            <span className="sr-only">Call Us!</span>
          </div>
        </Link>
        <Link href={siteConfig.links.mail} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </div>
        </Link>
        <Link
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  </div>
)

export function SiteHeader() {
  const mobile = useMediaQuery({ maxWidth: 816 })
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {mobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  )
}
