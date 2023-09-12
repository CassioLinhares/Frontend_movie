import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 9rem 9rem auto;
    grid-template-areas: 
    "header",
    "addMovie",
    "content";
`;

export const Section = styled.div`
    grid-area: "addMovie";
    margin: 2.4rem 7.5rem 0 8.5rem;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    
    > h2{
        font-size: 3.2rem;
        color: ${ ({theme}) => theme.COLORS.WHITE };
    }
`;

export const Content = styled.main`
    grid-area: "content";
    margin: 1rem 7.5rem 2rem 8.5rem;
    overflow-y: auto;

    > section{
        margin-right: .8rem;
    }
`;

export const DescriptionMovie = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const NewMovie = styled(Link)`
    width: 22rem;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    border-radius: 1rem;

    background-color: ${ ({theme}) => theme.COLORS.ROSE };
    color: ${ ({theme}) => theme.COLORS.BACKGROUND_900 };

    > svg{
        margin-right: .8rem;
    }
`;
