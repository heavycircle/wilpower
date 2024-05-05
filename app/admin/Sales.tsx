"use client"

import React from "react"

import { CartItem } from "@/types/Cart"
import type { Sale } from "@/types/Sale"
import { formatCurrency } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TableItem = ({ sale }: { sale: Sale }) => {
  return (
    <TableRow key={sale.payment.orderId}>
      <TableCell>
        <div className="grid">
          <p className="font-medium">{sale.payment.orderId}</p>
          <div className="flex gap-2">
            <p className="text-muted-foreground">Order Placed:</p>
            <p>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(sale.payment.createdAt ?? ""))}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="grid">
          <p>
            {sale.buyerInfo.firstName} {sale.buyerInfo.lastName}
          </p>
          <div className="flex gap-2">
            <p className="text-muted-foreground">Email:</p>
            <p>{sale.buyerInfo.email}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-muted-foreground">Phone:</p>
            <p>{sale.buyerInfo.phone}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="grid">
          <p>
            {sale.buyerInfo.addressFirst} {sale.buyerInfo.addressSecond}
          </p>
          <p>
            {sale.buyerInfo.city}, {sale.buyerInfo.state} {sale.buyerInfo.zip}
          </p>
        </div>
      </TableCell>
      <TableCell>
        <div className="grid">
          {sale.cart.map((item: CartItem) => (
            <div className="grid grid-cols-3">
              <p>{item.name}</p>
              <p>( {item.size} )</p>
              <p>x {item.quantity}</p>
            </div>
          ))}
        </div>
      </TableCell>
      <TableCell>
        {sale.payment.amountMoney?.amount
          ? formatCurrency(Number(sale.payment.amountMoney.amount) / 100)
          : formatCurrency(0)}
      </TableCell>
    </TableRow>
  )
}

export const Sales = () => {
  const [sales, setSales] = React.useState<Sale[]>([])

  // get the testimonials from the database
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sales")
      const data = await res.json()
      if (res.ok) setSales(data)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold">Sales List</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Order ID</TableHead>
            <TableHead className="">Contact Info</TableHead>
            <TableHead className="">Shipping Address</TableHead>
            <TableHead className="w-[300px] text-center">
              Items Ordered
            </TableHead>
            <TableHead className="">Order Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((t) => (
            <TableItem key={t.payment.orderId} sale={t} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
