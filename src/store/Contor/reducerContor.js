// export const initialStateContor = {
//   defaultValue: "test",
//   contorValue: 0,
// };

// export function contorReducer(state, action) {
//   switch (action.type) {
//     case "CONTOR_PLUS": {
//       const numar = state.contorValue + action.payload;
//       return { ...state, contorValue: numar };
//     }
//     case "CONTOR_MINUS": {
//       let newState = { ...state, contorValue: state.contorValue - 1 };
//       return newState;
//     }
//     default:
//       return state;
//   }
// }
export const initialStateContor = {
  contorValue: 0, // Your initial value for contor
  cartItems: [], // Your initial array for cart items
};

export const contorReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "CONTOR_PLUS": {
      return { ...state, contorValue: state.contorValue + action.payload };
      //   const numar = state.contorValue + action.payload;
      //   return { ...state, contorValue: numar };
    }
    case "CONTOR_MINUS": {
      return { ...state, contorValue: state.contorValue - action.payload };
      //   let newState = { ...state, contorValue: state.contorValue - 1 };
      //   return newState;
    }
    default:
      return state;
  }
};
