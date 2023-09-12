import { Container, Brand, Search, Profile, Logout } from "./styles";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/index";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";

export function Header({setSearch}) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
      };

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
                    onChange={handleInputChange}
                />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                    <img src={avatarUrl} alt={user.name} />
                </div>
            </Profile>
                <Logout onClick={handleSignOut}>
                    exit
                </Logout>
        </Container>
    );
}