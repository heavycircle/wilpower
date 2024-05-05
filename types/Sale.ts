import type { Payment } from "square"

import type { CartItem } from "./Cart"
import { Profile } from "./Profile"

export interface Sale {
  payment: Payment
  cart: CartItem[]
  buyerInfo: Profile
}
