import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header{
        height: 11rem;
        background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_500 };    
        
        display: flex;
        align-items: center;
        padding-left: 14.4rem;
    }
`;

export const Form = styled.form`
    width: 35rem;
    display: flex;
    flex-direction: column;

    margin: auto;

    > div:nth-child(2){
        margin-bottom: 2.4rem;
    }

    > div:nth-child(4){
        margin-bottom: 2.4rem;
    }
`;

export const Avatar = styled.div`
    height: 18rem;
    width: 18rem;
    margin: -9rem auto 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > img{
        height: 18rem;
        width: 18rem;
        border-radius: 50%;
    }

    > label{
        height: 4.8rem;
        width: 4.8rem;
        position: absolute;
        right: .8rem;
        bottom: 1.2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        border: none;
        border-radius: 50%;
        background-color: ${ ({theme}) => theme.COLORS.ROSE };

        >svg{
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
        
        > input{
            display: none;
        }
    }
`;