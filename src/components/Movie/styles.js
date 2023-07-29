import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    padding: 3.2rem;
    
    border: none;
    border-radius: 1.6rem;

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_500 };

    > h2{
        font-size: 2.4rem;
        font-weight: 700;
        color: ${ ({theme}) => theme.COLORS.WHITE };
        margin-bottom: .8rem;
    }

    > p{
        color: ${ ({theme}) => theme.COLORS.GRAY_100 };
        margin: 1.5rem auto 2rem;
        text-align: justify;
    }
`;

