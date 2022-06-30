import { useSelector, useDispatch } from "react-redux";
import { addProd } from "../../Store/modules/cart/action";

import { Container, StyledLi, StyledUl } from "./style";

export const ProdCard = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

 

  return (
    <Container>
      <StyledUl>
        {products.map((produto, index) => (
          <StyledLi key={index}>
            <div>
              <img src={produto.image} alt="funko-Naruto" />
            </div>
            <section>
              <p>{produto.name}</p>
              <button onClick={()=>dispatch(addProd(produto))} >Adicionar ao carrinho</button>
            </section>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};
