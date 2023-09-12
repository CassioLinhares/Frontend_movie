import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.ROSE};

    svg{
        margin-right: 1rem;
    }
`;