import { Container, Description, Title } from './styles'
import { formatDistanceToNow } from 'date-fns'

export function Post( { item } ) {

    return(
        <Container to={`/post/${item.number}`}>
            <Title>
                <h3>{item.title}</h3>
                <span>{formatDistanceToNow(item.updated_at)}</span>
            </Title>
            <Description>
                {item.body}
            </Description>
        </Container>
    )
}