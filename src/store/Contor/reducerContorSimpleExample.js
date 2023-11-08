export const initialStateContor = {
  contorValue: {
    "Beef burger": 0,
    "Chichen burger": 0,
    "Vegan burger": 0,
    "Pizza beef": 0,
    "Pizza chichen": 0,
    "Pizza vegan": 0,
  },

  cartItems: [], // Your initial array for cart items
};

export const contorReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload, state.cartItems);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "INCREMENT_ITEM": {
      // payload: "Pizza";
      let contorCopy = { ...contorValue };
      contorCopy[action.payload] = contorValue[action.payload] + 1;
      return { ...state, contorValue: contorCopy };
      //   const numar = state.contorValue + action.payload;
      //   return { ...state, contorValue: numar };
    }
    case "DECREMENT_ITEM": {
      return { ...state, contorValue: state.contorValue - action.payload };
      //   let newState = { ...state, contorValue: state.contorValue - 1 };
      //   return newState;
    }
    default:
      return state;
  }
};
