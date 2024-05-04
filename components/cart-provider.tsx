"use client"

import React, { ReactNode, createContext, useContext, useState } from "react"

import type { CartItem } from "@/types/Cart"

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  editItemQuantity: (name: string, size: string, inc: number) => void
  removeFromCart: (name: string, size: string) => void // Assume identification by name and size
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({
  children,
}: Readonly<CartProviderProps>): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCartItems((currentItems) => {
      const index = currentItems.findIndex(
        (ci) => ci.name === item.name && ci.size === item.size
      )
      if (index > -1) {
        // Item already exists in the cart, increment quantity
        const newItems = [...currentItems]
        newItems[index] = {
          ...newItems[index],
          quantity: newItems[index].quantity + item.quantity,
        }
        return newItems
      } else {
        // Item does not exist, add to cart
        return [...currentItems, item]
      }
    })
  }

  const editItemQuantity = (name: string, size: string, increment: number) => {
    setCartItems((currentItems) => {
      const index = currentItems.findIndex(
        (item) => item.name === name && item.size === size
      )
      if (index > -1) {
        const newQuantity = currentItems[index].quantity + increment
        if (newQuantity > 0) {
          // Update the quantity if it's greater than 0
          const updatedItems = [...currentItems]
          updatedItems[index] = {
            ...updatedItems[index],
            quantity: newQuantity,
          }
          return updatedItems
        } else {
          // Remove item if quantity falls to 0 or less
          return currentItems.filter(
            (item) => item.name !== name || item.size !== size
          )
        }
      }
      return currentItems
    })
  }

  const removeFromCart = (name: string, size: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.name === name && item.size === size))
    )
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, editItemQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
