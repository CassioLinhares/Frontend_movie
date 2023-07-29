import { styled } from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 20rem;
    padding: 1.9rem 1.6rem;

    outline: none;
    border: none;
    border-radius: 1rem;
    resize: none;

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700 };
    color: ${ ({theme}) => theme.COLORS.WHITE };

    &::placeholder{
            color: ${ ({theme}) => theme.COLORS.GRAY_100 };
        }
`;