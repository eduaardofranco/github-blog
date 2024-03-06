import { styled } from "styled-components";

export const Container = styled.footer`
    background: ${props => props.theme['black-700']};
    padding: 4rem 0 2.5rem 0;
    margin-top: -2rem;
    display: flex;
    justify-content: center;
    a {
        color: ${props => props.theme['blue']};
    }
`;