import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    background: ${props => props.theme['black-500']};
    padding: 3rem;
    border-radius: 10px;
    color: ${props => props.theme['gray-500']};
    text-decoration: none;

`;
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    height: 60px;
    overflow: hidden;
    h3 {
        color: ${props => props.theme['white']};
        line-height: 3rem;
    }
    span {
        font-size: 1.4rem;
        white-space: nowrap;
    }
`;
export const Description = styled.p`
    height: 108px;
    overflow: hidden;
`;