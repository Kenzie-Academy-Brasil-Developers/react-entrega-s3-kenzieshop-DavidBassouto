import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUl = styled.ul`
  width: 100%;
  max-width: 600px;
  height: 100%;
  overflow-y: scroll;
  padding: 3px;

  gap: 5px;
  border: solid 1px var(--preto);

  background: var(--azulEscuro);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledLi = styled.li`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid var(--cinza);

  background: var(--cinza);
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 180px;
    background-color: var(--branco);
    padding: 5px;
    > img {
      width: 70%;
      max-height: 100%;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
    p {
      text-align: center;
      font-weight: bolder;
    }
  }

  span {
    width: fit-content;
  }

  button {
    padding: 7px;
    background: var(--laranja);
    border: none;
    color: var(--branco);
  }
`;
