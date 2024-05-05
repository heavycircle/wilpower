interface ImageProps {
  url: string
  description: string
}

export interface Quantity {
  XS: number
  S: number
  M: number
  L: number
  XL: number
  "2XL": number
}

interface Description {
  material: string
  fit: string
}

export interface Item {
  _id: string
  name: string
  inv: string
  price: number
  quantity: Quantity
  desc: Description
  images: ImageProps[]
}
