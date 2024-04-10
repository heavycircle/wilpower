"use client"

import React from "react"
import { notFound } from "next/navigation"
import { useSession } from "next-auth/react"

import Loading from "@/app/loading"

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  React.useEffect(() => {
    if (status !== "loading" && !session) notFound()
  }, [session, status])

  if (status === "loading") return <Loading />
  if (!session) notFound()
  if (session) return children
  return null
}
