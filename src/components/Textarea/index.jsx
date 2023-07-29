import { Container } from "./styles";

export function Textarea({title, ...rest}) {
    return(
        <Container {...rest}>
            {title}
        </Container>
    );
}