import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 9rem auto;
    grid-template-areas: "header" "content";

    > main{
        overflow-y: auto;
    }
`;

export const Content = styled.div`
        grid-area: "content";
        margin: 3rem 11rem 2rem 8.5rem;
        
        .headerBtn{
            display: flex;
            justify-content: space-between;
        }

       > header{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4rem;
            margin-top: 2.4rem;
            margin-bottom: 4rem;

            h2{
                font-size: 3.6rem;
                font-weight: 500;
                margin-right: 2rem;
            }
        }

        .inline{
            display: flex;
            align-items: center;

            > img{
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                margin-right: .8rem;
            }
    
            > strong{
                font-weight: 400;
                margin-right: .8rem;
            }
    
            > span{
                display: flex;
                align-items: center;

                > svg{
                    margin-right: .8rem;
                    color: ${ ({theme}) => theme.COLORS.ROSE };
                }
            }
        }

            > p{
                margin: 4rem auto;
                text-align: justify;
            }
        

`;