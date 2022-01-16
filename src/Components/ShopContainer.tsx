import { Container, Grid, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useAppContext } from '../context'
import { CardItem } from './CardItem'
import { Drawer } from '@material-ui/core'
import Cart from './Cart'
import { useEffect } from 'react'

const useStyles = makeStyles({
  container: {
    marginTop: 24,
    width: '100%',
  },
})

const ShopContainer = () => {
  const classes = useStyles()
  const value = useAppContext()

  useEffect(() => {
    if (value?.cart) value.Loaded()
  }, [value?.cart])
  if (value?.isLoading) return <LinearProgress className={classes.container} />
  else
    return (
      <Container className={classes.container}>
        <Drawer
          anchor='right'
          open={value?.state.isCartOpen}
          onClose={() => value?.openCart()}
        >
          <Cart />
        </Drawer>
        <Grid container spacing={3}>
          {value
            ? value.cart?.map((item) => {
                return (
                  <Grid item lg={4} md={4} sm={6} key={item.id}>
                    <CardItem
                      {...item}
                      key={item.id}
                      AddToCart={value.AddToCart}
                    />
                  </Grid>
                )
              })
            : null}
        </Grid>
      </Container>
    )
}

export default ShopContainer
