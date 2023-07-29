import { Container, Brand, Search, Profile } from "./styles";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

export function Header() {
    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input 
                    type="text"
                    placeholder="Search by title" 
                    icon={FiSearch}
                />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Cássio Linhares</strong>
                    <a href="/">exit</a>
                </div>
                <img src="https://www.github.com/CassioLinhares.png" alt="user image" />
            </Profile>
        </Container>
    );
}