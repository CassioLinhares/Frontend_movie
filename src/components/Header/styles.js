import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    grid-area: "header";

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700 };

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 9rem;
    grid-template-areas: "brand search profile";
`;

export const Brand = styled.div`
    grid-area: "brand";
    display: flex;
    align-items: center;
    justify-content: center;

    > h1{
        font-size: 2.4rem;
        font-weight: 700;
        color: ${ ({theme}) => theme.COLORS.ROSE };
    }
`;

export const Search  = styled.div`
    grid-area: "search";

    display: flex;
    align-items: center;
    justify-content: center; 
`;

export const Profile = styled(Link)`
    grid-area: "profile";
    display: flex;
    align-items: center;
    justify-content: center;

    >div{
        display: flex;
        font-size: 1.4rem;

        > img{
            height: 5.6rem;
            width: 5.6rem;
            border-radius: 50%;
            margin-left: .9rem;
        }
        > strong{
            padding-top: 0.5rem;
            font-weight: 700;
            color: ${ ({theme}) => theme.COLORS.GRAY_50 };
            position: relative;
        }
    }
`;

export const Logout = styled.button`
    background: none;
    border: none;
    color: ${ ({theme}) => theme.COLORS.GRAY_100 };
    position: absolute;
    right: 15.3rem;
    top: 4rem;
`;