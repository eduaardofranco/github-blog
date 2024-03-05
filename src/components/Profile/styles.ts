import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme['black-700']};
    border-radius: 10px;

    display: flex;
    align-items: center;
    gap: 3.2rem;

    padding: 3rem;
    p {
        margin: 2rem 0 2rem 0;
    }
    .links {
        display: flex;
        gap: 2.5rem;
    }
`;
export const Title = styled.div`
    color: ${props => props.theme['white']};
    display: flex;
    justify-content: space-between;
    font-size: 2.4rem;
    a {
        color: ${props => props.theme['blue']};
        font-size: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;

        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
        &:hover {
            &::after {
                transition: width .2s;
                width: 100%;
            }
        }
        &::after {
            content: '';
            display: block;
            height: 1px;
            width: 0;
            position: absolute;
            bottom: 0px;
            background: ${props => props.theme['blue']};
            left: 0;
        }
    }

`;
export const Image = styled.img`
    width: 148px;
    border-radius: 8px;
    border: 2px solid ${props => props.theme['blue']};
    border-radius: 999px;
`;
export const Details = styled.div`
    display: block;
    width: 100%;
`;
export const Link = styled.a`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    svg {
        color: ${props => props.theme['gray-900']};
    }
`;