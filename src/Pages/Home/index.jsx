import { Carrinho } from "../../Components/Carrinho";
import { Header } from "../../Components/Header";
import { ProdCard } from "../../Components/ProdCard";
import { Container } from "../style";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Carrinho />
        <ProdCard />
      </Container>
    </>
  );
};
