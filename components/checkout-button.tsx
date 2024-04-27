import Link from "next/link"
import { ShoppingCartIcon } from "lucide-react"

import { Button } from "./ui/button"

export const CheckoutButton = () => (
  <Button variant="ghost" size="icon" asChild>
    <Link href="/cart">
      <ShoppingCartIcon className="size-5" />
    </Link>
  </Button>
)
