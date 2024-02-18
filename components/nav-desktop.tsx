"use client"

import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export const DesktopHeader = () => (
  <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {siteConfig.mainNav?.length ? (
        <nav className="flex gap-6">
          {siteConfig.mainNav?.map(
            (item: NavItem, index) =>
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
      <nav className="flex items-center space-x-1">
        <Link href={siteConfig.links.phone} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.phone className="size-5" />
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
            <Icons.mail className="size-5" />
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
            <Icons.instagram className="size-5" />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  </div>
)
