"use client"

import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react"
import { useMediaQuery } from "react-responsive"

import { Button } from "@/components/ui/button"

import { Icons } from "./icons"

export function SiteFooter() {
  const { data: session } = useSession()
  const router = useRouter()
  const mobile = useMediaQuery({ maxWidth: 700 })

  return (
    <footer
      className={`mt-2 flex justify-between border-t-[1px] p-4 ${
        mobile && "flex-col gap-4"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <Icons.Logo className="size-12" />
        <div className="flex flex-col">
          <span className="text-sm font-bold">Wil Power Sports Training</span>
          <span className="text-sm italic text-muted-foreground">
            Site Designed by{" "}
            <Button
              variant="link"
              onClick={() => router.replace("https://github.com/thecae")}
              className="m-0 h-fit p-0 italic text-muted-foreground"
            >
              Cole Ellis
            </Button>{" "}
            (2024).{" "}
            <Button
              variant="link"
              onClick={() =>
                router.replace("https://github.com/thecae/wilpower")
              }
              className="m-0 h-fit p-0 italic text-muted-foreground"
            >
              Repository Public.
            </Button>{" "}
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center ${
          mobile ? "items-center" : "items-end"
        }`}
      >
        {session ? (
          <>
            <span className="text-sm">
              Logged in as{" "}
              <b className="font-semibold">{session?.user?.name}</b>
            </span>
            <div className="flex gap-2">
              <Button
                variant={"outline"}
                onClick={() => router.push("/admin")}
                className="mt-1 text-xs hover:text-primary"
              >
                Admin Console
              </Button>
              <Button
                variant={"outline"}
                onClick={() => signOut()}
                className="mt-1 text-xs hover:text-primary"
              >
                Sign Out
              </Button>
            </div>
          </>
        ) : (
          <Button
            variant="link"
            onClick={() => signIn("google")}
            className="m-0 h-fit p-0 text-sm font-light text-foreground hover:text-primary"
          >
            Not logged in.
          </Button>
        )}
      </div>
    </footer>
  )
}
