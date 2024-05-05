"use client"

import React from "react"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"
import { Payment } from "square"

import { CartItem } from "@/types/Cart"
import type { TotalTypes } from "@/types/Total"
import { computeCart } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useStepper } from "@/components/ui/stepper"
import { useCart } from "@/components/cart-provider"

const SubmitPayment = ({
  total,
  cartItems,
  setPayment,
}: {
  total: number
  cartItems: CartItem[]
  setPayment: (payment: Payment) => void
}) => {
  const { nextStep } = useStepper()
  const { buyerInfo } = useCart()

  return (
    <PaymentForm
      applicationId={process.env.NEXT_PUBLIC_SQUARE_APPID ?? ""}
      locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATIONID ?? ""}
      cardTokenizeResponseReceived={async (token) => {
        const result = await fetch("/api/store/checkout", {
          method: "POST",
          body: JSON.stringify({
            token: token.token,
            total,
            cartItems,
            buyerInfo,
          }),
          headers: { "Content-Type": "application/json" },
        })
        const data = await result.json()
        if (result.ok) {
          setPayment(data)
          nextStep()
        } else {
          console.log("bad")
        }
      }}
    >
      <CreditCard className="credit-card" />
    </PaymentForm>
  )
}

export const PaymentSection = ({
  setPayment,
}: {
  setPayment: (payment: Payment) => void
}) => {
  const { cartItems, buyerInfo } = useCart()
  const { prevStep } = useStepper()
  const [total, setTotal] = React.useState<TotalTypes>({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  })

  React.useEffect(() => {
    async function getCart() {
      return await computeCart(cartItems, buyerInfo)
    }
    getCart().then((v) => setTotal(v))
  }, [cartItems, buyerInfo, setTotal])

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 rounded-xl border p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-base">
            <p className="text-muted-foreground">Contact</p>
            <p>{buyerInfo.email}</p>
          </div>
          <Button onClick={prevStep} variant={"link"}>
            Change
          </Button>
        </div>
        <Separator />
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-base">
            <p className="text-muted-foreground">Ship to</p>
            <p className="text-ellipsis">
              {buyerInfo.addressFirst}, {buyerInfo.city}, {buyerInfo.state}{" "}
              {buyerInfo.zip}
            </p>
          </div>
          <Button onClick={prevStep} variant={"link"}>
            Change
          </Button>
        </div>
      </div>
      <SubmitPayment
        cartItems={cartItems}
        total={total.total}
        setPayment={setPayment}
      />
    </div>
  )
}
