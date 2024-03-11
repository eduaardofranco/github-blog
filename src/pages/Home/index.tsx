import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { Post } from "../../components/Post";
import { Container } from './styles'
import { useEffect, useState } from "react";
import { Octokit } from "octokit";

export function Home() {
    const [user, setUser] = useState({})
    useEffect(() => {
        async function fetchUser() {
            const profileAPIKey = import.meta.env.PROFILE_API_KEY
            const octokit = new Octokit({
                auth: profileAPIKey
            })
            try {
                const response = await octokit.request('https://api.github.com/users/eduaardofranco', {
                    username: 'eduaardofranco',
                    headers : {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                })
                console.log('console', response)
                setUser(response.data)
            } catch (error) {
                console.log('Error fetching user', error)
            }
        }
        fetchUser()
    }, [])

    return(
        <Container>
            <Profile user={user} />
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