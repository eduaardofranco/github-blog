import { styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 865px;
    margin: -102px auto 0 auto;
    min-height: calc(100vh - 265px);
    h1 {
        color: ${props => props.theme['white']};
    }
    .links {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
    }
`;

export const HeaderBox = styled.section`
    background: ${props => props.theme['black-700']};
    border-radius: 10px;
    flex-direction: column;

    display: flex;
    gap: 3.2rem;

    padding: 3rem;
`;

export const Content = styled.div`
    padding: 4rem 3rem;
    p {
        line-height: 160%;
        &+ p {
            margin-top: 3rem;
        }
    }
`;
export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    a {
        color: ${props => props.theme['blue']};
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        gap: 5px;
            
        svg {
            font-size: 18px;
        }
        &.githubLink {
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
            svg {
                font-size: 12px;
            }
        }
    }
`;
export const ItemLink = styled.a`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    svg {
        color: ${props => props.theme['gray-900']};
    }
`;