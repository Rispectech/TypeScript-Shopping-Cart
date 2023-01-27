import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxHeight: 600,
  },
  media: {
    height: 250,
    objectFit: "contain",
    width: "100%",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
  },
  cardButton: {
    width: "100%",
    fontWeight: 600,
  },
  highlight: {
    fontWeight: 800,
  },
  highlightTone: {
    fontWeight: 600,
  },
});

export const CardItem = ({
  image,
  description,
  title,
  price,
  id,
  AddToCart,
}: CartItemType) => {
  const classes = useStyles();
  console.log();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia className={classes.media} image={image} title={title} /> */}
        <div>
          <img src={image} alt={title} className={classes.media} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Typography gutterBottom>
          Price: <span className={classes.highlight}> {price} $</span>
        </Typography>
        <Button
          size="small"
          color="primary"
          className={classes.cardButton}
          onClick={() => AddToCart({ id, image, title, price, quantity: 1 })}
        >
          {/* Add to the cart */}
          <Typography>
            <span className={classes.highlightTone}>Add to the cart</span>
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
