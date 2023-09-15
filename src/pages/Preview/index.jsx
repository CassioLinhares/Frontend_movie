import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";

export function Preview() {
    const params = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [data, setData] = useState(null);
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleBack() {
        navigate(-1);
    }

    async function handleDeleteMovie() {
        const confirm = window.confirm("Do you really want to delete the note?");
        if (confirm) {
           const response = await api.delete(`/notes/${params.id}`);
            // console.log(response.data)
            navigate(-1);  
        }
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes/${params.id}`);
            console.log(response.data)
            setData(response.data);
        }
        fetchNotes();
    }, []);

    return (
        <Container>
            <Header />

            {
                data && (
                    <main>
                        <Content>
                            <div className="headerBtn">
                                <div>
                                    <ButtonText title="Return" icon={FiArrowLeft} onClick={handleBack} />
                                </div>
                                <div>
                                    <ButtonText title="Delete movie" onClick={handleDeleteMovie}/>
                                </div>
                            </div>

                            <header>
                                <div className="inline">
                                    <h2>{data.title}</h2>
                                    <Rating rating={data.rating} isBigSize />
                                </div>

                                <div className="inline">
                                    <img src={avatarUrl} alt={avatarUrl} />
                                    <strong>By {user.name}</strong>
                                    <span> <FiClock /> {data.updated_at}</span>
                                </div>
                            </header>

                            {
                                data.tags &&
                                <Section>
                                    {
                                        data.tags.map(tag => (
                                            <Tag
                                                title={tag.name}
                                                key={String(tag.id)}
                                            />
                                        ))
                                    }

                                </Section>
                            }

                            <p>{data.description}</p>

                        </Content>
                    </main>
                )
            }

        </Container>
    );
}

//erro ao carregar a page de preview