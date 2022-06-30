import styled from "styled-components";

export const HeaderCarrinho = styled.div`
  width: 100%;
  max-width: 600px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--preto);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUl = styled.ul`
  width: 100%;
  max-width: 600px;
  height: fit-content;
  max-height: 140px;
  overflow-y: scroll;

  padding: 10px;
  gap: 10px;
  border: solid 1px var(--preto);

  background: var(--azulEscuro);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  > span,
  p {
    color: var(--branco);
    text-shadow: none;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;

  background: var(--cinza);
  > p {
    padding: 5px;
    font-weight: bolder;
    color: var(--preto);
  }

  > img {
    width: 20%;
  }

  button {
    height: 50px;
    width: 60px;
    margin: auto 10px auto 100px;
    background: var(--laranja);
    color: var(--branco);
  }
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  height: 30px;
  button {
    padding: 5px;
    background: var(--laranja);
    color: var(--branco);
  }
`;
