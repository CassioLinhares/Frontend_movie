import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 9rem auto;
    grid-template-areas: "header" "content";

    > main{
        grid-area: "content";
        margin: 3rem 7.5rem 2rem 8.5rem;
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-bottom: 4rem;
    margin-right: 1.6rem;

    > header{
        > h2{
            margin-top: 2.4rem;
            font-size: 3.6rem;
            font-weight: 500;
        }
    }

    .inline{
        display: flex;
        gap: 4rem;
    }

    span{
        display: flex;
        flex-wrap: wrap;
        gap: 2.4rem;
        padding: 1.6rem;
        
        border-radius: 1rem;
        background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900 };
    }

`;