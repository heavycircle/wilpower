"use client"

import React from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

import type { Testimonial } from "@/types/Testimonial"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

const TableItem = ({ test }: { test: Testimonial }) => {
  return (
    <TableRow key={test.name}>
      <TableCell className="font-medium">{test.name}</TableCell>
      <TableCell>{test.quote}</TableCell>
      <TableCell className="grid grid-cols-2 gap-2">
        <EditTestimonial testimonial={test} />
        <DeleteTestimonial testimonial={test} />
      </TableCell>
    </TableRow>
  )
}

const AddTestimonial = () => {
  const [author, setAuthor] = React.useState<string>()
  const [quote, setQuote] = React.useState<string>()
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()

  const onSubmit = async () => {
    setError("")
    setSuccess("")
    if (!author || !quote) {
      setError("Please fill out both fields before submitting!")
      return
    }
    const res = await fetch("/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: author, quote }),
    })
    if (!res.ok) setError(await res.text())
    else setSuccess(await res.text())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="italic text-muted-foreground">
          Click Here to Add New Testimonials.
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Testimonial</DialogTitle>
          <DialogDescription>
            Write the Quote and Author for this Testimonial. Click Submit to
            save changes. <strong>Do not put quotation marks.</strong>
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {error}
            </AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {success}
            </AlertDescription>
          </Alert>
        )}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">
              Author
            </Label>
            <Input
              id="author"
              placeholder="Walt Disney"
              className="col-span-3"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quote" className="text-right">
              Quote
            </Label>
            <Textarea
              id="quote"
              placeholder={`The way to get started is to quit talking and begin doing.`}
              className="col-span-3"
              onChange={(e) => setQuote(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const EditTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const [author, setAuthor] = React.useState<string>(testimonial.name)
  const [quote, setQuote] = React.useState<string>(testimonial.quote)
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()

  const onSubmit = async () => {
    setError("")
    setSuccess("")
    if (!author || !quote) {
      setError("Please fill out both fields before submitting!")
      return
    }
    const res = await fetch("/api/testimonials", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: testimonial._id, name: author, quote }),
    })
    if (!res.ok) setError(await res.text())
    else setSuccess(await res.text())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Testimonial</DialogTitle>
          <DialogDescription>
            Update the Quote and Author for this Testimonial. Click Submit to
            save changes. <strong>Do not put quotation marks.</strong>
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {error}
            </AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {success}
            </AlertDescription>
          </Alert>
        )}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">
              Author
            </Label>
            <Input
              id="author"
              defaultValue={testimonial.name}
              className="col-span-3"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quote" className="text-right">
              Quote
            </Label>
            <Textarea
              id="quote"
              defaultValue={testimonial.quote}
              className="col-span-3"
              onChange={(e) => setQuote(e.target.value)}
              maxLength={200}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const DeleteTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()

  const onSubmit = async () => {
    setError("")
    setSuccess("")
    const res = await fetch("/api/testimonials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: testimonial._id }),
    })
    if (!res.ok) setError(await res.text())
    else setSuccess(await res.text())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Testimonial</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this testimonial?{" "}
            <strong>This cannot be undone.</strong>
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {error}
            </AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {success}
            </AlertDescription>
          </Alert>
        )}
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Confirm Deletion
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([])

  // get the testimonials from the database
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/testimonials")
      const data = await res.json()
      if (res.ok) setTestimonials(data)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold">Testimonials</h2>
      <Table>
        <TableCaption>
          <AddTestimonial />
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Author</TableHead>
            <TableHead>Quote</TableHead>
            <TableHead className="w-[200px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testimonials.map((t) => (
            <TableItem key={t.name} test={t} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
