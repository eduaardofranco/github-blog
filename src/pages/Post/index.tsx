import { IoIosArrowBack } from "react-icons/io";
import { Container, Content, HeaderBox, ItemLink, Navigation } from "./styles";
import { Link, useParams } from 'react-router-dom'
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { formatDistanceToNow } from 'date-fns'

interface PostProps {
    title: string
    created_at: string
    body: string
    user: {
        login: string
        html_url: string
    }
    comments: number
}
export function Post() {
    const { url } = useParams()

    const [issue, setIssue] = useState<PostProps>({})
    

    useEffect(() => {
        async function fetchIssueData() {
            const query = `repo:eduaardofranco/github-blog/${url}`

            try {
                const response = await api.get(`repos/eduaardofranco/github-blog/issues/${url}`, {
                    params: {
                      q: query,
                    },
                    headers : {
                        'X-GitHub-Api-Version': '2022-11-28',
                    }
                  })

                setIssue(response.data)
                console.log(response.data)
            } catch (error) {
                console.log('error fetching issue: ',error)
            }
        }
        fetchIssueData()
    }, [])

    return(
        <Container>
                {
                    issue && (
                        <>
                            <HeaderBox>
                                <Navigation>
                                    <Link to="/">
                                        <IoIosArrowBack />
                                        Back
                                    </Link>
                                    <a className="githubLink" href={issue.user && issue.user.html_url} target='blank'>
                                        Github
                                        <FaExternalLinkAlt />
                                    </a>
                                </Navigation>
                                <h1>{issue.title}</h1>
                                <div className="links">
                                    <ItemLink>
                                        <FaGithub />
                                        { issue.user && <span>{issue.user.login}</span> }
                                    </ItemLink>
                                    <ItemLink>
                                        <FaCalendarDay />
                                        <span>{issue.user && formatDistanceToNow(new Date(issue.created_at))}</span>
                                    </ItemLink>
                                    <ItemLink>
                                        <FaComment />
                                        <span>{issue.comments} comments</span>
                                    </ItemLink>
                                </div>
                            </HeaderBox>
                            <Content>
                                {issue.body}
                            </Content>
                        </>
                )
            }
        </Container>
    )
}