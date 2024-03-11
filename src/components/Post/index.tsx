import { Container, Description, Title } from './styles'

export function Post( { item } ) {
    console.log(item)
    return(
        <Container>
            <Title>
                <h3>{item.title}</h3>
                <span>{item.updated_at}</span>
            </Title>
            <Description>
                {item.body}
            </Description>
        </Container>
    )
}