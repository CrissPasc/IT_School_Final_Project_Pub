// export const initialStateContor = {
//   contorValue: 1, // Your initial value for contor
//   cartItems: [], // Your initial array for cart items
// };

// export const contorReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       console.log(action.payload, state.cartItems);
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case "INCREMENT_ITEM": {
//       return { ...state, contorValue: state.contorValue + action.payload };
//       //   const numar = state.contorValue + action.payload;
//       //   return { ...state, contorValue: numar };
//     }
//     case "DECREMENT_ITEM": {
//       return { ...state, contorValue: state.contorValue - action.payload };
//       //   let newState = { ...state, contorValue: state.contorValue - 1 };
//       //   return newState;
//     }
//     default:
//       return state;
//   }
// };

// //

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
      // const { name } = action.payload;
      // const itemIndex = state.cartItems.findIndex((item) => item.name === name);

      // if (itemIndex !== -1) {
      //   const updatedCart = [...state.cartItems];
      //   updatedCart[itemIndex].count += 1;
      //   return { ...state, cartItems: updatedCart };
      // } else {
      //   return {
      //     ...state,
      //     cartItems: [...state.cartItems, { ...action.payload, count: 1 }],
      //   };

      console.log(action.payload, state.cartItems);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "INCREMENT_ITEM": {
      // const { name } = action.payload;
      // const itemToIncrement = state.cartItems.find(
      //   (item) => item.name === name
      // );
      // if (itemToIncrement) {
      //   itemToIncrement.count += 1;
      //   return { ...state, cartItems: [...state.cartItems] };
      // }
      // return state;

      // // exemplu Razvan
      // payload: "Pizza";
      let contorCopy = { ...state.contorValue };

      contorCopy[action.payload] = state.contorValue[action.payload] + 1;
      console.log(contorCopy);
      return { ...state, contorValue: contorCopy };

      // // exemplu
      // const itemToIncrement = state.cartItems.find(
      //   (item) => item.name === action.payload
      // );
      // if (itemToIncrement) {
      //   itemToIncrement.contorValue += 1;
      //   return { ...state, cartItems: [...state.cartItems] };
      // }
      // return state;
      //  // initial
      // return { ...state, contorValue: state.contorValue + action.payload };
    }
    case "DECREMENT_ITEM": {
      return { ...state, contorValue: state.contorValue - action.payload };
    }
    default:
      return state;
  }
};
