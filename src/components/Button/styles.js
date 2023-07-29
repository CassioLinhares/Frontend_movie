import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    border-radius: 1rem;

    background-color: ${ ({theme, isDelete}) => isDelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.ROSE };
    color: ${ ({theme, isDelete}) => isDelete ? theme.COLORS.ROSE : theme.COLORS.BACKGROUND_900 };

    > svg{
        margin-right: .8rem;
    }
`;