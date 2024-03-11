import { IoIosArrowBack } from "react-icons/io";
import { Container, Content, HeaderBox, ItemLink, Navigation } from "./styles";
import { Link, useParams } from 'react-router-dom'
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function Post() {
    const { url } = useParams()
    console.log(url)
    return(
        <Container>
            <HeaderBox>
                <Navigation>
                    <Link to="/">
                        <IoIosArrowBack />
                        Back
                    </Link>
                    <a className="githubLink" href="https://github.com/eduaardofranco" target='blank'>
                        Github
                        <FaExternalLinkAlt />
                    </a>
                </Navigation>
                <h1>JavaScript data types and data structures</h1>
                <div className="links">
                    <ItemLink>
                        <FaGithub />
                        <span>eduaardofranco</span>
                    </ItemLink>
                    <ItemLink>
                        <FaCalendarDay />
                        <span>a day ago</span>
                    </ItemLink>
                    <ItemLink>
                        <FaComment />
                        <span>5 comments</span>
                    </ItemLink>
                </div>
            </HeaderBox>
            <Content>
                <p>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>
                <p>Dynamic typing</p>
                <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>
            </Content>
        </Container>
    )
}