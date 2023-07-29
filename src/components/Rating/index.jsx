import { Container } from "./styles";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export function Rating({ rating, isBigSize }) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        i <= rating
        ? stars.push(<RiStarSFill key={i} />)
        : stars.push(<RiStarSLine key={i} />)
    }

    return (
        <Container isBigSize={isBigSize}>
            {stars}
        </Container>
    );
}