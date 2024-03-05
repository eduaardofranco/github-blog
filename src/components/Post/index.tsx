import { Container, Description, Title } from './styles'
export function Post() {
    return(
        <Container>
            <Title>
                <h3>JavaScript data types and data structures</h3>
                <span>1 day ago</span>
            </Title>
            <Description>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </Description>
        </Container>
    )
}