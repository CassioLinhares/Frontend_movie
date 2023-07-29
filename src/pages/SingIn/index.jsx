import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { FiMail, FiLock } from "react-icons/fi";

export function SingIn() {
    return(
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Application to track everything you watch.</p>

                <h2>Login</h2>

                <Input type="text" icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Password" />

                <Button title="Login" />

                <Link to="/register" title="Create account" centered />
            </Form>

            <Background />

        </Container>
    );
}