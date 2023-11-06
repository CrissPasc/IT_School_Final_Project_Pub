export const initialStateContor = {
  contorValue: 0, // Your initial value for contor
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
      return { ...state, contorValue: state.contorValue + action.payload };
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
