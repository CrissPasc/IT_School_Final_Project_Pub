export const initialStateContor = {
  contorValue: {
    "Beef burger": 0,
    "Chichen burger": 0,
    "Vegan burger": 0,
    "Pizza beef": 0,
    "Pizza chichen": 0,
    "Pizza vegan": 0,
  }, // Your initial value for contor
  cartItems: [], // Your initial array for cart items
};

export const contorReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(
        state,
        state.cartItems,
        "state.cartItems",
        action.payload,
        "action.payload"
      );
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "UPDATE_CART": {
      console.log(
        state.cartItems,
        "state.cartItems",
        action.payload,
        "action.payload"
      );
      // pus de la increment .. ar trebui sa fie asemanator
      let contorCopy = { ...state.contorValue };

      contorCopy[action.payload] = state.contorValue[action.payload] + 1;
      console.log(contorCopy);
      return { ...state, contorValue: contorCopy };
    }
    case "INCREMENT_ITEM": {
      let contorCopy = { ...state.contorValue };

      contorCopy[action.payload] = state.contorValue[action.payload] + 1;
      console.log(contorCopy);
      return { ...state, contorValue: contorCopy };
    }
    case "DECREMENT_ITEM": {
      let contorCopy = { ...state.contorValue };

      contorCopy[action.payload] = state.contorValue[action.payload] - 1;
      console.log(contorCopy);

      return { ...state, contorValue: contorCopy };

      // return { ...state, contorValue: state.contorValue - action.payload };
    }
    default:
      return state;
  }
};
