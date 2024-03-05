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