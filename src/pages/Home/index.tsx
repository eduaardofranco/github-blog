import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { Post } from "../../components/Post";
import { Container, SearchContainer, Title } from './styles'
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { api } from "../../lib/axios";

export function Home() {
    const [user, setUser] = useState({})
    const [issues, setIssues] = useState([])
    const [search, setSearch] = useState('')

    const profileAPIKey = import.meta.env.PROFILE_API_KEY
        
    const octokit = new Octokit({
        auth: profileAPIKey
    })

    async function fetchUser() {
        try {
            const response = await octokit.request('https://api.github.com/users/eduaardofranco', {
                username: 'eduaardofranco',
                headers : {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            setUser(response.data)
        } catch (error) {
            console.log('Error fetching user', error)
        }
    }

    async function fetchIssues(text?: string) {
        let query = 'repo:eduaardofranco/github-blog'
        if(text) query = `repo:eduaardofranco/github-blog: ${text}`
        try {
              
            const response = await api.get('search/issues', {
                params: {
                  q: query,
                },
                headers : {
                    'X-GitHub-Api-Version': '2022-11-28',
                }
              })

            setIssues(response.data.items)
            console.log(response.data.items)
        } catch (error) {
            console.log('Error fetching issues: ',error)
        }
    }

    useEffect(() => {
        fetchUser()
        fetchIssues()
    }, [])

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchIssues(search)
        }, 2000)
    
        return () => clearTimeout(delayDebounce)
      }, [search])
    return(
        <Container>
            <Profile user={user} />
            <SearchContainer>
                <Title>
                    <h2>Publishes</h2>
                    <span>{issues.length} publishes</span>
                </Title>
                <input
                    type="search"
                    placeholder="Search content"
                    onChange={(e) => setSearch(e.target.value)}
                />
        </SearchContainer>
            <div className="publishes">
                {
                    issues && issues.map(item => (
                        <Post
                            key={item.url}
                            item={item}
                        />
                    ))
                }
            </div>
        </Container>
    )
}