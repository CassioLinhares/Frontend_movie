import { Container, Section, Content, DescriptionMovie, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

export function Home() {
    return (
        <Container>
            <Header />

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
                        <Movie to="/preview" data={
                            {
                                title: "Interestellar",
                                rating: 4,
                                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                                tags: [
                                    { id: "1", name: "science fiction" },
                                    { id: "2", name: "drama" },
                                    { id: "3", name: "Family" }
                                ]
                            }
                        } />
                        <Movie to="/preview" data={
                            {
                                title: "Interestellar",
                                rating: 4,
                                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                                tags: [
                                    { id: "1", name: "Science fiction" },
                                    { id: "2", name: "drama" },
                                    { id: "3", name: "Family" }
                                ]
                            }
                        } />
                        <Movie to="/preview" data={
                            {
                                title: "Interestellar",
                                rating: 4,
                                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                                tags: [
                                    { id: "1", name: "Science fiction" },
                                    { id: "2", name: "drama" },
                                    { id: "3", name: "Family" }
                                ]
                            }
                        } />
                    </DescriptionMovie>
                </section>

            </Content>

        </Container>
    );
}