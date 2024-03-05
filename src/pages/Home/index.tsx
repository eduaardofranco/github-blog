import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { Post } from "../../components/Post";
import { Container } from './styles'

export function Home() {
    return(
        <Container>
            <Profile />
            <Search />
            <div className="publishes">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </Container>
    )
}