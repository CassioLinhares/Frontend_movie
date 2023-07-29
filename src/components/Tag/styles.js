import { styled } from "styled-components";

export const Container = styled.span`
    padding: .5rem 1.6rem;
    margin-right: .8rem;

    border: none;
    border-radius: 1rem;

    font-size: 1.2rem;
    text-transform: capitalize;

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700 };
    color: ${ ({theme}) => theme.COLORS.GRAY_100 };
`;