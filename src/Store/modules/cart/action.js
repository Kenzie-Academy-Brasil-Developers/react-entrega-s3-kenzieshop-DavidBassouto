export const addProd = (prod) => {
  return {
    type: "ADD_PROD",
    prod,
  };
};

export const removeProd = (prod, indexProd) => {
  return {
    type: "REMOVE_PROD",
    prod,
    indexProd,
  };
};

export const claerProd = () => {
  return {
    type: "CLEAR_PROD",
  };
};
