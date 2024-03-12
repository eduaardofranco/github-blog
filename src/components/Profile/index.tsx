
import { FaBuilding, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Container, Details, Image, Link, Title } from './styles'
import { MdPeopleAlt } from 'react-icons/md'

interface UserProps {
    user: {
        avatar_url: string
        name: string
        bio: string
        login: string
        company: string
        followers: string
        html_url: string
    }
}

export function Profile( { user }: UserProps) {
    const { avatar_url, name, bio, login, company, followers, html_url } = user
    return(
        <Container>
            <Image src={avatar_url} />
            <Details>
                <Title>
                    <h2>{name}</h2>
                    <a href={html_url} target='blank'>
                        Github
                        <FaExternalLinkAlt />
                    </a>

                </Title>
                <p>{bio}</p>
                <div className="links">
                    <Link>
                        <FaGithub />
                        <span>{login}</span>
                    </Link>
                    {company && (
                        <Link>
                            <FaBuilding />
                            <span>{company}</span>
                        </Link>
                    )}
                    <Link>
                        <MdPeopleAlt />
                        <span>{followers}</span>
                    </Link>
                </div>
            </Details>
        </Container>
    )
}