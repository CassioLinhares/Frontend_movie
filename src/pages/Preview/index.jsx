import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { Rating } from "../../components/Rating";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

import { FiArrowLeft, FiClock } from "react-icons/fi";

export function Preview() {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <Link to="/" title="Return" icon={FiArrowLeft} />

                    <header>
                        <div className="inline">
                            <h2>Interestellar</h2>
                            <Rating rating={4} isBigSize />
                        </div>

                        <div className="inline">
                            <img src="https://www.github.com/CassioLinhares.png" alt="user image" />
                            <strong>By Cássio Linhares</strong>
                            <span> <FiClock /> 27/07/2023 as 20:45</span>
                        </div>
                    </header>

                    <Section>
                        <Tag title="Ficção Científica" />
                        <Tag title="Drama" />
                        <Tag title="Família" />
                    </Section>

                    <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
                        agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma
                        fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que
                        seu quarto está assombrado por um fantasma que tenta se comunicar com ela.
                        Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que
                        está enviando mensagens codificadas através de radiação gravitacional,
                        deixando coordenadas em binário que os levam até uma instalação secreta da
                        NASA liderada pelo professor John Brand. O cientista revela que um buraco
                        de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem
                        oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro"
                        enviadas anos antes identificaram três planetas potencialmente habitáveis
                        orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
                        homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para
                        pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se
                        um dos planetas se mostrar habitável, a humanidade irá seguir para ele na
                        instalação da NASA, que é na realidade uma enorme estação espacial. A partida
                        de Cooper devasta Murphy.
                    </p>

                </Content>
            </main>

        </Container>
    );
}