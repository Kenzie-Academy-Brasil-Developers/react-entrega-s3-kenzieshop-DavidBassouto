import {
  HeaderCarrinho,
  StyledUl,
  Container,
  StyledLi,
  DivStyled,
} from "./style";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { claerProd, removeProd } from "../../Store/modules/cart/action";

export const Carrinho = () => {
  const carrinho = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const vendeu = () => {
    toast.success("Compra realizada!");
    dispatch(claerProd());
  };

  return (
    <>
      <Container>
        <HeaderCarrinho>
          <h4>Carrinho</h4>
        </HeaderCarrinho>
        <StyledUl>
          {carrinho.length > 0 ? (
            carrinho.map((produto, index) => (
              <StyledLi key={index}>
                <img src={produto.image} alt="funko-Naruto" />
                <p>{produto.name}</p>
                <button onClick={() => dispatch(removeProd(produto, index))}>
                  Remover Produto
                </button>
              </StyledLi>
            ))
          ) : (
            <span> Ainda nao há produtos aqui</span>
          )}
          <DivStyled>
            <p>
              Total: R$
              {carrinho.reduce((valorAnterior, acc) => {
                return valorAnterior + acc.price;
              }, 0)}
            </p>
            <button onClick={vendeu}> Finalizar Compra </button>
          </DivStyled>
        </StyledUl>
      </Container>
    </>
  );
};
