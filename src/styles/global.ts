import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Nunito', sans-serif;
        line-height: 160%;
        background: ${props => props.theme['black-900']};
        color: ${props => props.theme['gray-500']};
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }
`;

