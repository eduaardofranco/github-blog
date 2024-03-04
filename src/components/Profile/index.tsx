
import { FaBuilding, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Container, Details, Image, Link, Title } from './styles'
import { MdPeopleAlt } from 'react-icons/md'

export function Profile() {
    return(
        <Container>
            <Image src="/src/assets/avatar.jpg" />
            <Details>
                <Title>
                    <h2>Eduardo Franco</h2>
                    <a href="https://github.com/eduaardofranco" target='blank'>
                        Github
                        <FaExternalLinkAlt />
                    </a>

                </Title>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div className="links">
                    <Link>
                        <FaGithub />
                        <span>eduaardofranco</span>
                    </Link>
                    <Link>
                        <FaBuilding />
                        <span>Rocketseat</span>
                    </Link>
                    <Link>
                        <MdPeopleAlt />
                        <span>32 followers</span>
                    </Link>
                </div>
            </Details>
        </Container>
    )
}