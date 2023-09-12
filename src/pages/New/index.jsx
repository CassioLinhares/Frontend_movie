import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { ItemMovie } from "../../components/itemMovie";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";

import { useState } from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

export function New() {
   const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState([]);    
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState([]);

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleDeleteTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleAddNote() {
        if (!title) {
            return alert("Fill in the title field");
        }
        if (!rating || rating < 0 || rating > 5) {
            return alert("Fill in the evaluation field correctly");
        }
        if (!description) {
            return alert("Fill in the description field");
        }
        if (newTag) {
            const fieldTag = window.confirm("You left a tag in the field to add, want to add?");
            return fieldTag ? handleAddTag() : setNewTag("");
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });

       alert("Successfully created note!");
      navigate(-1);
    }

    function handleRemoveDataNote() {
        setTitle("");
        setRating([]);
        setDescription("");
        setNewTag([]);
        setTags([]);
        alert("Data removed from fields successfully");
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                        <button type="button" onClick={handleBack}>
                            <FiArrowLeft />
                            Return
                        </button>
                        {/* <ButtonText title="Return" icon={FiArrowLeft} onClick={handleBack} /> */}
                        <h2>New movie</h2>
                    </header>

                    <div className="inline">
                        <Input 
                            type="text" 
                            placeholder="Title"
                            onChange={e => setTitle(e.target.value)} 
                            value={title}
                        />
                        <Input
                            type="number"
                            placeholder="Your rating (from 0 to 5)"
                            min={0}
                            max={5}
                            onChange={e => setRating(e.target.value)}
                            value={rating}
                        />
                    </div>

                    <Textarea 
                        placeholder="Comments..." 
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />

                    <Section title="Genre">
                        <span>
                            <ItemMovie 
                                isNew 
                                placeholder="Movie genre"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)} 
                                onClick={handleAddTag}
                            />
                            {
                                tags.map((tag, index) => (
                                    <ItemMovie 
                                        key={String(index)}
                                        value={tag} 
                                        onClick={() => handleDeleteTag(tag)}
                                    />

                                ))
                            }
                        </span>
                    </Section>

                    <div className="inline">
                        <Button isDelete title="Clear data" onClick={handleRemoveDataNote} />
                        <Button title="Save changes" onClick={handleAddNote} />
                    </div>
                </Form>
            </main>
        </Container>
    );
}