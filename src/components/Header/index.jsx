import { Container, Brand, Search, Profile, Logout } from "./styles";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/index";

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        signOut();
    }

    return (
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
                    <strong>{user.name}</strong>
                    <img src={avatarUrl} alt={avatarUrl} />
                </div>
            </Profile>
                <Logout onClick={handleSignOut}>
                    exit
                </Logout>
        </Container>
    );
}