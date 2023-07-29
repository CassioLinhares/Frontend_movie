import { styled } from "styled-components";
import background from "../../assets/background-rocketMovies.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;

    background-color: ${ ({theme}) => theme.COLORS.Background_800 };
`;

export const Form = styled.form`
    padding: 0 16.3rem 0 13.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1{
        font-size: 4.8rem;
        font-weight: 700;
        color: ${ ({theme}) => theme.COLORS.ROSE };
    }

    > p{
        font-size: 1.4rem;
        color: ${ ({theme}) => theme.COLORS.GRAY_100 };
    }

    > h2{
        font-size: 2.4rem;
        font-weight: 500;
        color: ${ ({theme}) => theme.COLORS.GRAY_50 };
        text-align: left;
        margin: 4.8rem 0;
    }

    > a{
        text-align: center;
        color: ${ ({theme}) => theme.COLORS.ROSE };
        margin-top: 4.2rem;
    }
    
    button{
        margin-top: 2.4rem;
    }
    
    svg{
        font-size: 1.6rem;
        margin-right: .8rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;