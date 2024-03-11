import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    max-width: 865px;
    margin: -102px auto 0 auto;
    .publishes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        column-count: 2;
    }
`;
export const SearchContainer = styled.div`
    margin: 7.5rem 0;

    input {
        background: ${props => props.theme['black-1000']};
        border: 1px solid ${props => props.theme['black-300']};
        border-radius: 6px;
        font-size: 1.6rem;
        padding: 1rem;
        width: 100%;
        height: 50px;
        &:focus {
            border: 1px solid ${props => props.theme['blue']};
            color: ${props => props.theme['gray-500']};
        }
        &::placeholder {
            color: ${props => props.theme['gray-900']};
        }
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    h2 {
        font-size: 1.8rem;
        color: ${props => props.theme['gray-300']}
    }
    span {
        color: ${props => props.theme['gray-700']};
        font-size: 1.4rem;
    }
`;