import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/index";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";

export function Profile() {
    const { user, updateUser } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);


    async function handleUpdateUser() {
        const user = {
            name,
            email,
            oldPassword: passwordOld,
            password: passwordNew
        }

        await updateUser({ user, avatarFile });
    }

    function handleChangeAvatar(e) {
        const fileUpload = e.target.files[0];
        setAvatarFile(fileUpload);

        const fileUrl = URL.createObjectURL(fileUpload);
        setAvatar(fileUrl);
    }

    return (
        <Container>
            <header>
                <Link to="/" title="Return" icon={FiArrowLeft} />
            </header>

            <Avatar>
                <img src={avatar} alt={user.name} />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input
                        type="file"
                        id="avatar"
                        onChange={handleChangeAvatar}
                    />
                </label>
            </Avatar>

            <Form>
                <Input
                    type="text"
                    placeholder="Name"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type="E-mail"
                    placeholder="E-mail"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Current password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="New password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Save" onClick={handleUpdateUser} />
            </Form>
        </Container>
    );
}