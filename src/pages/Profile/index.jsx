import { Container, Form, Avatar } from "./styles";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/" title="Return" icon={FiArrowLeft}/>
            </header>

            <Avatar>
                <img src="https://www.github.com/CassioLinhares.png" alt="user image" />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar" />
                </label>
            </Avatar>

            <Form>  
                <Input type="text" placeholder="Name" icon={FiUser} />
                <Input type="E-mail" placeholder="E-mail" icon={FiMail} />
                <Input type="password" placeholder="Current password" icon={FiLock} />
                <Input type="password" placeholder="New password" icon={FiLock} />
                <Button title="Save" />
            </Form>
        </Container>
    );
}