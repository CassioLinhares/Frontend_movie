import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: ${ ({centered}) => centered ? "center" : "flex-start" };

    color: ${({ theme }) => theme.COLORS.ROSE};

    svg{
        margin-right: 1rem;
    }
`;