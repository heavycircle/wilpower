"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { CheckoutButton } from "./checkout-button"

export const MobileHeader = () => {
  const router = useRouter()
  return (
    <Sheet>
      <div className="flex w-full items-center justify-between px-4 py-3">
        <SheetTrigger>
          <Menu className="size-10" />
        </SheetTrigger>
        <h2 className="grow text-center text-2xl font-bold leading-tight sm:text-3xl">
          <Balancer>{siteConfig.name.toUpperCase()}</Balancer>
        </h2>
        <CheckoutButton />
        <ThemeToggle />
      </div>
      <SheetContent side={"left"}>
        <SheetHeader className="my-4">
          <SheetTitle>
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center justify-center gap-4 transition-all hover:text-primary"
              >
                <Icons.Logo className="size-8" />
                <span className="inline-block font-bold">
                  <Balancer>{siteConfig.name}</Balancer>
                </span>
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-2 text-muted-foreground">
            {siteConfig.mainNav?.length ? (
              <nav className="flex flex-col gap-2">
                {siteConfig.mainNav?.map(
                  (item: NavItem) =>
                    item.href && (
                      <SheetClose key={item.title} asChild>
                        <Button
                          onClick={() => router.push(item.href ?? "/")}
                          rel="noreferrer"
                          className="link w-full hover:bg-inherit hover:text-primary"
                          variant={"ghost"}
                        >
                          {item.title}
                        </Button>
                      </SheetClose>
                    )
                )}
              </nav>
            ) : null}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
