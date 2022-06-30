import { ShoppingCartSimple } from "phosphor-react";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <>
    <StyledHeader>
      <div>
        <h1>NarutoFunkoShop</h1>
      </div>
      <div>
        <ShoppingCartSimple size={40} color="#fca311" />
      </div>
    </StyledHeader>
    </>
  );
};
