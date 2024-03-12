import { Container, Description, Title } from './styles'
import { formatDistanceToNow } from 'date-fns'

export interface ItemProps {
    item: {
        number: Number
        title: string
        created_at: string
        body: string
    }
}
export function Post( { item }: ItemProps ) {

    const { number, title, created_at, body} = item

    const formatedDate = formatDistanceToNow(item.created_at)

    return(
        <Container to={`/post/${number}`}>
            <Title>
                <h3>{title}</h3>
                <span>{formatedDate} ago</span>
            </Title>
            <Description>
                {body}
            </Description>
        </Container>
    )
}