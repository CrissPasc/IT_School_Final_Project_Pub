export function contorPlus(numbertoPlus) {
  return {
    type: "INCREMENT_ITEM",
    payload: numbertoPlus,
  };
}

export function contorMinus(numbertoMinus) {
  return {
    type: "DECREMENT_ITEM",
    payload: numbertoMinus,
  };
}

export function addToCart(item) {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
}

export function updateCart(item) {
  return {
    type: "UPDATE_CART",
    payload: item,
  };
}
