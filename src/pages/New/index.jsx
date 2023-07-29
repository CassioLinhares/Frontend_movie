import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { ItemMovie } from "../../components/itemMovie";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";

export function New() {

    return(
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                        <Link to="/" title="Return" icon={FiArrowLeft} />
                        <h2>New movie</h2>
                    </header>

                    <div className="inline">
                        <Input type="text" placeholder="Title" />
                        <Input 
                        type="number" 
                        placeholder="Your rating (from 0 to 5)"
                        min={0}
                        max={5} 
                        />
                    </div>

                    <Textarea placeholder="Comments..." />

                    <Section title="Markers"> 
                        <span>
                            <ItemMovie value="React" />
                            <ItemMovie isNew placeholder="New marker" />                            
                        </span>
                    </Section>

                    <div className="inline">
                        <Button isDelete title="Delete movie" />
                        <Button title="Save changes" />
                    </div>
                </Form>
            </main>
        </Container>
    );
}