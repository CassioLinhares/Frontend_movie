import { styled } from "styled-components";

export const Container = styled.div`
     display: flex;
     gap: ${ ({isBigSize}) => isBigSize ? "1.2rem" : ".6rem" };

     > svg{
          font-size: ${ ({isBigSize}) => isBigSize ? "2rem" : "1.2rem" };
          color: ${ ({theme}) => theme.COLORS.ROSE };
     }
`;