import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { lightBlue } from '@material-ui/core/colors'
import { BorderBottom } from '@material-ui/icons'
import { useAppContext } from '../context'
// Types

// Styles

// display: flex;
//   justify-content: space-between;
//   font-family: Arial, Helvetica, sans-serif;
//   border-bottom: 1px solid lightblue;
//   padding-bottom: 20px;

//   div {
//     flex: 1;
//   }

//   .information,
//   .buttons {
//     display: flex;
//     justify-content: space-between;
//   }

//   img {
//     max-width: 80px;
//     object-fit: cover;
//     margin-left: 40px;
//   }
// `;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    BorderBottom: 1,
    BorderBottomColor: lightBlue,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
  information: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  img: {
    maxWidth: 80,
    objectFit: 'cover',
    marginLeft: 40,
  },
})
const CartItem = (item: cartPayload) => {
  const value = useAppContext()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h3>{item.title}</h3>
        <div className={classes.information}>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <div className={classes.information}>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => value?.Decrease(item.id)}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => value?.Increase(item.id)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} className={classes.img} />
    </div>
  )
}

export default CartItem
