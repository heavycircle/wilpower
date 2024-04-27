"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { InstagramIcon, MailIcon, PhoneCallIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import Balancer from "react-wrap-balancer"
import { z } from "zod"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const Title = () => (
  <h1 className="self-center text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
    <Balancer>Contact Me Here!</Balancer>
  </h1>
)

const ContactData = () => (
  <div className="grid items-center justify-center gap-2 md:grid-cols-3 md:gap-12">
    <Link href={siteConfig.links.instagram}>
      <div className="flex justify-center gap-4 rounded-xl p-2 transition-all hover:bg-primary/30">
        <InstagramIcon className="size-6" />
        <p>@wilpowersportstraining</p>
      </div>
    </Link>
    <Link href={siteConfig.links.phone}>
      <div className="flex justify-center gap-4 rounded-xl p-2 transition-all hover:bg-primary/30">
        <PhoneCallIcon className="size-6" />
        <p>(646) 210-3166</p>
      </div>
    </Link>
    <Link href={siteConfig.links.mail}>
      <div className="flex justify-center gap-4 rounded-xl p-2 transition-all hover:bg-primary/30">
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
  age: z.string(),
  level: z.string().min(2, {
    message: "Please enter your fitness level here!",
  }),
  routine: z.string().min(2, {
    message: "Please enter your current routine here!",
  }),
  training: z.enum(["group", "individual"]).superRefine((val, ctx) => {
    if (!["group", "individual"].includes(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Training must be either 'group' or 'individual'.",
      })
    }
  }),
})

const ContactForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      goals: "",
      questions: "",
      training: undefined,
      age: "",
      level: "",
      routine: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const submit = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
    toast({
      variant: submit.ok ? "default" : "destructive",
      description: await submit.text(),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
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
        <div className="grid gap-8 md:grid-cols-3">
          <FormField
            control={form.control}
            name="training"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Training Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select One..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="group">Group Training</SelectItem>
                      <SelectItem value="individual">
                        Individual Training
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="18" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fitness Level</FormLabel>
                <FormControl>
                  <Input placeholder="Absolute Beginner" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="routine"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What is your current workout routine? Include your type of
                training, frequency, etc.
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Routine Here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <p className="absolute left-1/2 bg-background px-2 text-muted-foreground">
          OR
        </p>
        <Separator className="" />
      </div>
      <ContactForm />
    </section>
  )
}
