import { SearchContainer, Title } from "./styles";

export function Search() {
    return(
        <SearchContainer>
            <Title>
                <h2>Publishes</h2>
                <span>6 publishes</span>
            </Title>
            <input
                type="search"
                placeholder="Search content"
            />
        </SearchContainer>
    )
}