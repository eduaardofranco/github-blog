import { Container } from './styles'
import githubLogo from '../../assets/github-logo.svg'

export function Header() {
    return(
        <Container>
            <img src={githubLogo} alt="" />
        </Container>
    )
}