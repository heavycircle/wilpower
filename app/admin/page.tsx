"use client"

import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Inventory } from "./Inventory"
import { Sales } from "./Sales"
import { Testimonials } from "./Testimonials"

const Title = () => (
  <h1 className="text-center text-5xl font-bold">Admin Console</h1>
)

export default function About() {
  return (
    <section className="mx-auto grid w-4/5 items-center gap-6 pb-8 pt-6 md:py-10">
      <Title />
      <Tabs defaultValue="testimonials" className="w-full">
        <TabsList>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
        </TabsList>
        <TabsContent value="testimonials">
          <Testimonials />
        </TabsContent>
        <TabsContent value="inventory">
          <Inventory />
        </TabsContent>
        <TabsContent value="sales">
          <Sales />
        </TabsContent>
      </Tabs>
    </section>
  )
}
