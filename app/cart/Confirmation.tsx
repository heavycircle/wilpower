"use client"

import React from "react"
import { Payment } from "square"

import { CartItem } from "@/types/Cart"
import { formatCurrency } from "@/lib/utils"
import { useCart } from "@/components/cart-provider"

export const Confirmation = ({
  payment,
  setHideSidebar,
}: {
  payment: Payment | undefined
  setHideSidebar: (hide: boolean) => void
}) => {
  const { cartItems, buyerInfo } = useCart()
  let date
  if (payment) {
    date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(payment.createdAt ?? ""))
  } else {
    date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date())
  }

  React.useEffect(() => setHideSidebar(true), [setHideSidebar])

  return (
    <div className="grid gap-8 text-base">
      <div className="grid justify-center gap-2 text-center">
        <h2 className="text-4xl font-extrabold">
          Thank you, {buyerInfo.firstName}!
        </h2>
        <h3 className="text-xl italic text-muted-foreground">
          Your order is on the way.
        </h3>
      </div>
      <div className="grid gap-1">
        <h4 className="text-base font-medium">Order Id: {payment?.id}</h4>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="grid gap-1">
          <h5 className="font-semibold">Shipping Address</h5>
          <div className="grid text-muted-foreground">
            <p>
              {buyerInfo.firstName} {buyerInfo.lastName}
            </p>
            <p>
              {buyerInfo.addressFirst} {buyerInfo?.addressSecond ?? ""}
            </p>
            <p>
              {buyerInfo.city}, {buyerInfo.state} {buyerInfo.zip}
            </p>
            <p>Tel: {buyerInfo.phone}</p>
          </div>
        </div>
        <div className="grid gap-1">
          <h5 className="font-semibold">Customer</h5>
          <div className="grid text-muted-foreground">
            <p>
              {buyerInfo.firstName} {buyerInfo.lastName}
            </p>
            <p>
              {buyerInfo.addressFirst} {buyerInfo?.addressSecond ?? ""}
            </p>
            <p>
              {buyerInfo.city}, {buyerInfo.state} {buyerInfo.zip}
            </p>
            <p className="text-foreground">{buyerInfo.email}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <h5 className="font-semibold">Items Ordered</h5>
        <div className="flex flex-col items-center gap-4">
          {cartItems.map((item: CartItem) => (
            <div
              className="flex w-1/2 justify-between text-muted-foreground"
              key={item.name}
            >
              <div className="grid">
                <p>{item.name}</p>
                <p className="font-extralight">{item.size}</p>
              </div>
              <div className="flex gap-10">
                <p>x {item.quantity}</p>
                <p>{formatCurrency(item.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <h5 className="font-semibold">Payment Info</h5>
        <div className="mx-auto flex w-11/12 justify-between text-muted-foreground">
          <p>
            {payment?.cardDetails?.card?.cardBrand} (
            {payment?.cardDetails?.card?.last4?.padStart(16, "*")})
          </p>
          <p>
            {payment?.amountMoney?.amount
              ? formatCurrency(Number(payment.amountMoney.amount) / 100)
              : formatCurrency(0)}
          </p>
        </div>
      </div>
    </div>
  )
}
