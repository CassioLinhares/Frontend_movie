import { styled } from "styled-components";

export const Container = styled.section`

    > h2{
        font-size: 2rem;
        color: ${ ({theme}) => theme.COLORS.GRAY_100 };
        margin-bottom: 2.4rem;
    }
`;