import { Container } from "./styles";

export function Link({ title, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={15} />}
            {title}
        </Container>
    );
}