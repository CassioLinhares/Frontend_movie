import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;

    margin-bottom: .8rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700 };
    color: ${ ({theme}) => theme.COLORS.WHITE };

    > input{
        width: 100%;
        height: 5.6rem;
        padding: 1.2rem;

        border: none;
        outline: none;

        background-color: transparent;
        color: ${ ({theme}) => theme.COLORS.WHITE };
        
        &::placeholder{
            color: ${ ({theme}) => theme.COLORS.GRAY_100 };
        }
    }
    
    > svg{
        margin-left: 1.6rem;
    }
`;