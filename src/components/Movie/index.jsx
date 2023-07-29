import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Movie({ data, maxCharacters = 285, ...rest }) {

    const limitCharacters = (text) => {
        return text.length <= maxCharacters ? text : text.slice(0, maxCharacters) + "...";
    }

    return (
        <Container {...rest}>

            <h2>{data.title}</h2>
            <Rating rating={data.rating} />
            <p>{limitCharacters(data.description)}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    );
}