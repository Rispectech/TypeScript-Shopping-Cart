import { Box, makeStyles } from '@material-ui/core'
import { useAppContext } from '../context'
import CartItem from './CartItem'

const useStyles = makeStyles({
  root: {
    width: 500,
    padding: 20,
    fontSize: 20,
  },
  padding: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bottom: {
    paddingBottom: 10,
  },
})

type Props = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart = () => {
  const value = useAppContext()
  const classes = useStyles()
  console.log(value?.cart)
  return (
    <aside className={classes.root}>
      <h2 className={classes.bottom}>Your Shopping Cart</h2>
      {value?.state?.cartItem.length === 0 ? (
        <p className={classes.padding}>No items in cart.</p>
      ) : null}
      {value?.state?.cartItem.map((item) => (
        <Box
          borderColor='primary.light'
          borderBottom={1}
          marginTop={2}
          marginBottom={2}
          key={item.id}
        >
          <CartItem key={item.id} {...item} />
        </Box>
      ))}
      <h2 className={classes.padding}>
        Total: $ {value?.state.TotalAmount.toFixed(2)}
      </h2>
    </aside>
  )
}

export default Cart
