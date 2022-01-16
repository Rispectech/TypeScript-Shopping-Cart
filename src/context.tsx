import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { reducer } from './reducer'
// declare const Var: contextValue
// const ShoppingContext = createContext(Var)

// const AppProvider: React.FC = ({ children }) => {
//   return (
//     <ShoppingContext.Provider value={null}>{children}</ShoppingContext.Provider>
//   )
// }

// type Product = {
//   name: string
//   uid: string
//   price: number | string
// }

// interface CartContext {
//   setCart?: React.Dispatch<Product>
//   cart: Product[]
//   // tester?: 'string'
// }

const defaultState = {
  cartItem: [],
  TotalAmount: 0,
  TotalItem: 0,
  isCartOpen: false,
}

const ShoppingContext = createContext<CartContextType>(undefined)

const useAppContext = (): CartContextType => {
  return useContext(ShoppingContext)
}

const AppProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[] | undefined>(undefined)

  const [state, dispatch] = useReducer(reducer, defaultState)
  const [isLoading, setIsloading] = useState(true)

  console.log(state)
  const AddToCart = ({ title, id, price, image, quantity }: cartPayload) => {
    dispatch({
      type: 'ADD_CART',
      payload: { title, id, price, image, quantity },
    } as never)
  }

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }

  const Increase = (id: number) => {
    dispatch({ type: 'INCREASE', payload: { id } })
  }

  const Decrease = (id: number) => {
    dispatch({ type: 'DECREASE', payload: { id } })
  }

  const Loaded = () => setIsloading(false)
  useEffect(() => {
    setIsloading(true)
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setCart(data))
    // setIsloading(false)
  }, [])

  // console.log(cart)
  return (
    <ShoppingContext.Provider
      value={{
        cart,
        AddToCart,
        openCart,
        state,
        Increase,
        Decrease,
        isLoading,
        Loaded,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

export { AppProvider, useAppContext }
