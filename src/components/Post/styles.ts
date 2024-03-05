import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme['black-500']};
    padding: 3rem;
    border-radius: 10px;

`;
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
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