import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { CartItem } from "@/types/Cart"
import { Profile } from "@/types/Profile"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function computeCart(cartItems: CartItem[], buyerInfo: Profile) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  )

  let shipping = 0,
    processing = 0
  const dbRes = await fetch("/api/sales/fees")
  if (!dbRes.ok) {
    console.log("Error fetching fees")
    return
  } else {
    const data = await dbRes.json()
    shipping = data.shipping
    processing = data.processing
  }

  let tax = 0
  if (buyerInfo.zip) {
    const res = await fetch(
      "https://api.api-ninjas.com/v1/salestax?zip_code=" + buyerInfo.zip,
      {
        headers: {
          "X-Api-Key": "GoMquQYT4fMvBBr7D7grbQ==tHTnHtQYccDeJdZ7",
        },
      }
    )
    const data = await res.json()
    tax =
      Math.round(
        data[0].total_rate * (subtotal + shipping + processing) * 100
      ) / 100
  }

  const total = subtotal + shipping + tax
  return { subtotal, shipping, processing, tax, total }
}

export const formatCurrency = (n: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n)
}
