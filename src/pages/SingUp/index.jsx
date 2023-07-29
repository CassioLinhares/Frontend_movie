import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SingUp() {
    return(
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Application to track everything you watch.</p>

                <h2>Login</h2>

                <Input type="text" icon={FiUser} placeholder="Name" />
                <Input type="text" icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Password" />

                <Button title="Register" />

                <Link to="/" title="Return login" icon={FiArrowLeft} centered />
            </Form>

            <Background />

        </Container>
    );
}