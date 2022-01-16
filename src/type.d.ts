type contextValue = string | undefined

type CartContextType = CartContext | undefined
// interface ShopObj {}

type Product = {
  category: string
  description: string
  id: number
  price: number | string
  rating: { rate: number; count: number }
  title: string
  image: string
}

type cartPayload = {
  price: number
  title: string
  id: number
  image: string
  quantity: number
}

interface CartItemType {
  category: string
  description: string
  id: number
  price: number | string
  rating: { rate: number; count: number }
  title: string
  image: string
  AddToCart: ({
    price: number,
    title: string,
    id: number,
    image: string,
    quantity: number,
  }) => void
}

interface CartContext {
  setCart?: React.Dispatch<Product>
  cart: Product[] | undefined
  AddToCart: ({
    price: number,
    title: string,
    id: number,
    image: string,
    quantity: number,
  }) => void
  openCart: () => void
  state: CartItemState
  Increase: (id: number) => void
  Decrease: (id: number) => void
  isLoading: boolean
  Loaded: () => void
  // tester?: 'string'
}

interface CartItemState {
  cartItem: cartPayload[]
  TotalAmount: number
  TotalItem: number
  isCartOpen: boolean
}

/*
category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/
