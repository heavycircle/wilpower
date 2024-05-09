"use client"

import React from "react"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Payment } from "square"

import type { TotalTypes } from "@/types/Total"
import { cn, computeCart, formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Stepper, StepperItem } from "@/components/ui/stepper"
import { useCart } from "@/components/cart-provider"
import { Icons } from "@/components/icons"

import { Confirmation } from "./Confirmation"
import { InformationSection } from "./InformationSection"
import { PaymentSection } from "./PaymentSection"

const CartStats = ({
  subtotal,
  shipping,
  processing,
  tax,
  total,
}: {
  subtotal: string
  shipping: string
  processing: string
  tax: string
  total: string
}) => (
  <div className="flex flex-col gap-3">
    <Separator className="my-5" />
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground">Subtotal</p>
      <p className="font-medium">{subtotal}</p>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground">Shipping</p>
      <p className="font-medium">{shipping}</p>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground">Processing</p>
      <p className="font-medium">{processing}</p>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground">Tax</p>
      <p
        className={
          tax === "Calculated at next step"
            ? "text-sm text-muted-foreground"
            : "font-medium"
        }
      >
        {tax}
      </p>
    </div>
    <Separator className="my-5" />
    <div className="flex items-center justify-between">
      <p className="font-semibold text-muted-foreground">Total</p>
      <p className="text-3xl font-medium">{total}</p>
    </div>
  </div>
)

const ShowItems = () => {
  const { cartItems, buyerInfo, editItemQuantity, removeFromCart } = useCart()
  const [total, setTotal] = React.useState<TotalTypes>({
    subtotal: 0,
    shipping: 0,
    processing: 0,
    tax: 0,
    total: 0,
  })

  React.useEffect(() => {
    async function getCart() {
      const cart = (await computeCart(cartItems, buyerInfo)) as TotalTypes
      setTotal(cart)
    }
    getCart()
  }, [cartItems, buyerInfo, setTotal])

  const sortedCartItems = [...cartItems].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <div className="mx-auto mt-10 w-full pl-10 md:border-l">
      <ul>
        {sortedCartItems.map((item) => (
          <li
            key={`${item.name}-${item.size}`}
            className="mb-4 flex items-center justify-between border-b pb-4"
          >
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-base text-muted-foreground">
                Size: {item.size}
              </p>
              <div className="my-2 grid grid-cols-3 items-center justify-center rounded-xl border text-base text-muted-foreground">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => editItemQuantity(item.name, item.size, -1)}
                >
                  <Minus className="size-4" />
                </Button>
                <p className="text-center">{item.quantity}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => editItemQuantity(item.name, item.size, 1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.name, item.size)}
            >
              <Trash2 className="size-6" />
            </Button>
          </li>
        ))}
      </ul>
      <CartStats
        subtotal={formatCurrency(total.subtotal)}
        shipping={formatCurrency(total.shipping)}
        processing={formatCurrency(total.processing)}
        tax={
          total.tax === 0
            ? "Calculated at next step"
            : formatCurrency(total.tax)
        }
        total={formatCurrency(total.total)}
      />
    </div>
  )
}

const steps = [
  { label: "Information" },
  { label: "Payment" },
  { label: "Confirmation" },
]

export default function CartPage() {
  const { cartItems } = useCart()
  const [payment, setPayment] = React.useState<Payment>()
  const [hideSidebar, setHideSidebar] = React.useState<boolean>(false)

  if (cartItems.length === 0) {
    return (
      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 text-xl italic text-muted-foreground md:flex-row">
        <p>Your cart is empty.</p>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/store"
        >
          Go back to shop.
        </Link>
      </div>
    )
  }

  return (
    <section className="mx-auto grid w-3/4 items-center gap-6 pb-8 pt-6 text-xl md:py-10">
      <div className={cn("grid gap-10", !hideSidebar && "md:grid-cols-3")}>
        <div className="flex w-full flex-col justify-center gap-8 md:col-span-2">
          <div className="flex justify-center">
            <Icons.Logo className="w-24" />
          </div>
          <Stepper initialStep={0} steps={steps} isClickable={false}>
            <StepperItem>
              <InformationSection />
            </StepperItem>
            <StepperItem>
              <PaymentSection setPayment={setPayment} />
            </StepperItem>
            <StepperItem>
              <Confirmation payment={payment} setHideSidebar={setHideSidebar} />
            </StepperItem>
          </Stepper>
        </div>
        {!hideSidebar && <ShowItems />}
      </div>
    </section>
  )
}
