export const initialStateContor = {
  contorValue: [
    {
      meal: "Pizza",
      mealNumbers: 1,
    },
  ], // Your initial value for contor
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
      payload: "Pizza";
      let contorLocal = [...state.contorValue];
      const acem = contorLocal.filter((el) => el.meal === action.payload);
      [];
      const acem2 = contorLocal.filter((el) => el.meal !== action.payload);
      [];
      if (acem.length > 0) {
        acem[0].mealNumbers = acem[0].mealNumbers + 1;
        let final = [...acem2, ...acem];

        return { ...state, contorValue: final };
      } else {
        let final = contorLocal.map(el => el.meal === action.payload ? {el.meal, el.mealNumbers: el.mealNumbers + 1} : el)
        return { ...state, contorValue: final };
      }

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
