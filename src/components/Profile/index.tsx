
import { FaBuilding, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Container, Details, Image, Link, Title } from './styles'
import { MdPeopleAlt } from 'react-icons/md'

interface UserProps {
    avatar_url: string
    name: string
    bio: string
    login: string
    company: string
    followers: string
    html_url: string
}

export function Profile( { user }: UserProps) {
    return(
        <Container>
            <Image src={user.avatar_url} />
            <Details>
                <Title>
                    <h2>Eduardo Franco</h2>
                    <a href={user.html_url} target='blank'>
                        Github
                        <FaExternalLinkAlt />
                    </a>

                </Title>
                <p>{user.bio}</p>
                <div className="links">
                    <Link>
                        <FaGithub />
                        <span>{user.login}</span>
                    </Link>
                    {user.company && (
                        <Link>
                            <FaBuilding />
                            <span>{user.company}</span>
                        </Link>
                    )}
                    <Link>
                        <MdPeopleAlt />
                        <span>{user.followers}</span>
                    </Link>
                </div>
            </Details>
        </Container>
    )
}