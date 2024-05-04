"use client"

import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"

const ShowItems = () => {
  const { cartItems, editItemQuantity, removeFromCart } = useCart()

  const sortedCartItems = [...cartItems].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <div className="mx-auto mt-10 w-full">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
        Check Out
      </h1>
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
    </div>
  )
}

const SubmitPayment = ({ total }: { total: number }) => (
  <PaymentForm
    applicationId={process.env.NEXT_PUBLIC_SQUARE_APPID ?? ""}
    locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATIONID ?? ""}
    cardTokenizeResponseReceived={async (token) => {
      const result = await fetch("/api/store/checkout", {
        method: "POST",
        body: JSON.stringify({ token: token.token, total }),
        headers: { "Content-Type": "application/json" },
      })
      console.log(result)
    }}
  >
    <CreditCard />
  </PaymentForm>
)

const CartStats = ({
  subtotal,
  shipping,
  total,
}: {
  subtotal: string
  shipping: string
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
    <Separator className="my-5" />
    <div className="flex items-center justify-between">
      <p className="font-semibold text-muted-foreground">Total</p>
      <p className="text-3xl font-medium">{total}</p>
    </div>
  </div>
)

const CheckOut = () => {
  const { cartItems } = useCart()

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  )
  const formattedSubtotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Change to your local currency if needed
  }).format(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
  )

  const shipping = 5
  const formattedShipping = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Change to your local currency if needed
  }).format(shipping)
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Change to your local currency if needed
  }).format(subtotal + shipping)

  return (
    <div className="flex flex-col gap-10">
      <CartStats
        subtotal={formattedSubtotal}
        shipping={formattedShipping}
        total={formattedTotal}
      />
      <SubmitPayment total={subtotal + shipping} />
    </div>
  )
}

export default function CartPage() {
  const { cartItems } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 text-xl italic text-muted-foreground">
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
      <div className="grid gap-10 md:grid-cols-2">
        <ShowItems />
        <CheckOut />
      </div>
    </section>
  )
}
