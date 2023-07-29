import { styled } from "styled-components";

export const Container = styled.div`
    padding: 1.6rem;

    border: ${ ({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none" };
    border-radius: 1rem;

    background-color: ${ ({theme, isNew}) => isNew ? "transparent" :  theme.COLORS.BACKGROUND_700};
    color: ${ ({theme}) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;

    > input{
        width: 100%;
        outline: none;
        border: none;

        background-color: transparent;
        color: ${ ({theme}) => theme.COLORS.WHITE};

        &::placeholder{
            color: ${ ({theme}) => theme.COLORS.GRAY_100};
        }
    }

    > button{
        border: none;
        background: none;
        color: ${ ({theme}) => theme.COLORS.ROSE};
    }
`;