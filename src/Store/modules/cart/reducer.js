export const CartReducer = (state = [], action) => {
  const { prod } = action;

  switch (action.type) {
    case "ADD_PROD":
      return [...state, prod];

    case "REMOVE_PROD":
      const { indexProd } = action;
      const newCart = state.filter((cartProd, index) => index !== indexProd);
      console.log(indexProd);

      return newCart;

    // const novoCarrinho = state.filter(
    //   (itemOnCart) => itemOnCart.name !== prod.name
    // );

    case "CLEAR_PROD":
      return [];

    default:
      return state;
  }
};
/*

*/
