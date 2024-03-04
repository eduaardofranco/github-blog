import styled from 'styled-components'

import backgroundCover from '../../assets/Cover.png'

export const Container = styled.header`
    background-image: url(${backgroundCover});
    height: 296px;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    img {
        width: 148px;
        height: 98px;
        margin-top: 5rem;
    }
`;