import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { Container } from './styles'

export function Home() {
    return(
        <Container>
            <Profile />
            <Search />
        </Container>
    )
}