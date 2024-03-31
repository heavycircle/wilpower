"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { InstagramIcon, MailIcon, PhoneCallIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import Balancer from "react-wrap-balancer"
import { z } from "zod"

import { SiteConfig, siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const Title = () => (
  <h1 className="self-center text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
    <Balancer>Contact Here!</Balancer>
  </h1>
)

const ContactData = () => (
  <div className="grid grid-cols-3 gap-12">
    <Link href={siteConfig.links.instagram}>
      <div className="flex gap-4 rounded-xl p-2 hover:bg-primary/30">
        <InstagramIcon className="size-6" />
        <p>@wilpower</p>
      </div>
    </Link>
    <Link href={siteConfig.links.phone}>
      <div className="flex gap-4 rounded-xl p-2 hover:bg-primary/30">
        <PhoneCallIcon className="size-6" />
        <p>(646) 210-3166</p>
      </div>
    </Link>
    <Link href={siteConfig.links.mail}>
      <div className="flex gap-4 rounded-xl p-2 hover:bg-primary/30">
        <MailIcon className="size-6" />
        <p>will52nt@hotmail.com</p>
      </div>
    </Link>
  </div>
)

const formSchema = z.object({
  name: z.string().min(2, {
    message: "This doesn't seem like a correct name. Please try again.",
  }),
  email: z.string().email().min(2, {
    message: "Invalid Email Address.",
  }),
  goals: z.string().min(2, {
    message: "Please enter your program goals here!",
  }),
  questions: z.string().optional(),
})

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      goals: "",
      questions: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 space-x-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What are your goals for this training program?
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Goals Here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Do you have any questions about my services?
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Questions Here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default function ContactPage() {
  return (
    <section className="container grid items-center justify-center gap-8 pb-8 pt-6 md:py-10">
      <Title />
      <ContactData />
      <div className="relative flex h-6 w-full items-center justify-center">
        <p className="absolute left-1/2 bg-background px-2 text-muted-foreground">OR</p>
        <Separator className="" />
      </div>
      <ContactForm />
    </section>
  )
}
