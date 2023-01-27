import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useAppContext } from "../context";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  adjust: {
    display: "flex",
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const ShopAppBar = () => {
  const value = useAppContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopping Cart
          </Typography>
          {/* <div>
            <Button
              onClick={() => value?.openCart()}
              className={classes.adjust}
            >
              <Badge badgeContent={value?.state.TotalItem} color='secondary'>
                <ShoppingCartIcon className={classes.adjust} />
              </Badge>
            </Button>
          </div> */}
        </Toolbar>
        <Button onClick={() => value?.openCart()} className={classes.adjust}>
          <Badge badgeContent={value?.state.TotalItem} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </AppBar>
    </div>
  );
};
