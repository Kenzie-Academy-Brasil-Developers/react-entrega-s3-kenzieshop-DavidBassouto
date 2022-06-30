import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0%;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    border-radius: 5px;
}

:root{
    --laranja:#fca311;
    --azulEscuro:#14213d;
    --cinza:#e5e5e5;
    --preto:#000000;
    --branco:#ffffff;
}

body{
    background-color: var(--cinza);
    color:var(--black);
    font-family: 'Inter', sans-serif;
}
h1,h2 ,h3 ,h4, h5, h5, h6{
    font-size: 16px;
    font-weight: bolder;
    color: var(--laranja);
}

span, p{
font-size: 12px;
font-weight: normal;
color: var(--azulEscuro);
text-shadow:0 1px 1px var(--branco)
}
button, svg{
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        filter: brightness(1.4);
    }
}
`;
