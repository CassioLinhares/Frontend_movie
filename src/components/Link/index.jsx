import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function Link({ title, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={15} />}
            {title}
        </Container>
    );
}