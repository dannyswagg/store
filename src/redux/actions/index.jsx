//Adding items to the cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//Removing items from the cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
//Decrease quantity of product in the cart
export const deCart = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};
