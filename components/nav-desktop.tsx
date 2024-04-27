"use client"

import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

import { CheckoutButton } from "./checkout-button"
import { Icons } from "./icons"

export const DesktopHeader = () => (
  <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.Logo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {siteConfig.mainNav?.length ? (
        <nav className="flex gap-6">
          {siteConfig.mainNav?.map(
            (item: NavItem) =>
              item.href && (
                <Link
                  key={item.title}
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
      <CheckoutButton />
      <ThemeToggle />
    </div>
  </div>
)
