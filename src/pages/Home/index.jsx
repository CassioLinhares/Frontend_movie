import { Container, Section, Content, DescriptionMovie, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";

import { useState, useEffect } from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    function handlePreview(id) {
        navigate(`/preview/${id}`);
    }
      
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }
        fetchNotes();
    }, [search]);

    return (
        <Container>
            <Header setSearch={setSearch} />

            <Section>
                <h2>My movies</h2>
                <NewMovie to="/new">
                    <FiPlus />
                    Add Movie
                </NewMovie>
            </Section>

            <Content>
                <section>

                    <DescriptionMovie>
                        { 
                           notes.map((note) => (
                            <Movie
                                key={String(note.id)}
                                data={note}
                                onClick={() => {handlePreview(note.id)}} 
                            />
                           ))
                        }
                    </DescriptionMovie>

                </section>

            </Content>

        </Container>
    );
}