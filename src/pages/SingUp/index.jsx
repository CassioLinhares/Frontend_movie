import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { useState } from "react";
import { api } from "../../services" 
import { useNavigate } from "react-router-dom";

export function SingUp() {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleNewUser() {
        if (!name || !email || !password) {
            return alert("Fill in all fields, please");
        }
        try {
            api.post("/users", {name, email, password})
            .then(() => {
                alert("Successfully registered user");
                navigate(-1);
            })
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Could not register");
            }
        }
    }

    return(
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Application to track everything you watch.</p>

                <h2>Login</h2>

                <Input 
                    type="text" 
                    icon={FiUser} 
                    placeholder="Name"
                    onChange={e => setName(e.target.value)} 
                />
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

                <Button title="Register" onClick={handleNewUser} />

                <Link to="/">
                    <FiArrowLeft />
                    Return login
                </Link>
            </Form>

            <Background />

        </Container>
    );
}