import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }
    return(
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Application to track everything you watch.</p>

                <h2>Login</h2>

                <Input 
                    type="text" 
                    icon={FiMail} 
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)} 
                />
                <Input 
                    type="password" 
                    icon={FiLock} 
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)} 
                />

                <Button title="Login" onClick={handleSignIn} />

                <Link to="/register">Create account</Link>
            </Form>

            <Background />

        </Container>
    );
}