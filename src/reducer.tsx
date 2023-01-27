// interface CartItemState {
//   cartItem: Product[]
//   TotalAmount: number
//   TotalItem: number
// }

// interface ReducerAction {
//   type: string
//   payload: any
// }

// const initialState = { count: 0 }

// type cartPayload = {
//   price: number
//   title: string
//   id: number
//   image: string
// }

type ReducerAction =
  | { type: "INCREASE"; payload: { id: number } }
  | { type: "DECREASE"; payload: { id: number } }
  | {
      type: "ADD_CART";
      payload: cartPayload;
    }
  | { type: "OPEN_CART" };

function reducer(state: CartItemState, action: ReducerAction) {
  switch (action.type) {
    case "ADD_CART": {
      // console.log(action.payload)
      let value = state.cartItem.find((element) => element.id === action.payload.id);
      console.log(value);
      if (value) {
        value = { ...value, quantity: value.quantity + 1 };
        let cartItem = [
          ...state.cartItem.filter((item) => item.id !== action.payload.id),
          value,
        ];
        return {
          ...state,
          cartItem,
          TotalItem: state.TotalItem + 1,
          TotalAmount: state.TotalAmount + action.payload.price,
        };
      }
      let cartItem = [...state.cartItem, { ...action.payload }];
      return {
        ...state,
        cartItem,
        TotalItem: state.TotalItem + 1,
        TotalAmount: state.TotalAmount + action.payload.price,
      };
    }

    case "OPEN_CART": {
      return { ...state, isCartOpen: !state.isCartOpen };
    }
    case "INCREASE": {
      let value = state.cartItem.find((element) => element.id === action.payload.id);
      if (value) {
        value = { ...value, quantity: value.quantity + 1 };
        let cartItem = [
          ...state.cartItem.filter((item) => item.id !== action.payload.id),
          value,
        ];
        return {
          ...state,
          cartItem,
          TotalItem: state.TotalItem + 1,
          TotalAmount: state.TotalAmount + value.price,
        };
      }
      return { ...state };
    }
    case "DECREASE": {
      let value = state.cartItem.find((element) => element.id === action.payload.id);
      if (value) {
        value = { ...value, quantity: value.quantity - 1 };

        let cartItem = [
          ...state.cartItem.filter((item) => item.id !== action.payload.id),
          value,
        ];
        if (value.quantity <= 0)
          return {
            ...state,
            TotalItem: state.TotalItem - 1,
            TotalAmount: state.TotalAmount - value.price,
            cartItem: [...state.cartItem.filter((item) => item.id !== action.payload.id)],
          };
        else
          return {
            ...state,
            cartItem,
            TotalItem: state.TotalItem - 1,
            TotalAmount: state.TotalAmount - value.price,
          };
      }
      return { ...state };
    }
    default:
      throw new Error();
  }
}

export { reducer };
