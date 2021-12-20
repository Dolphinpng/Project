import styled from "styled-components";

export const LeftSection = styled.div`
      width:100%;
      @media ${(props) => props.theme.breakpoints} {
          width: 80%;
          display : flex;
          flex-direction : column;
          margin:auto;
        
      }
      @media ${(props)=> props.theme.breakpoints.md} {
          width:100%;
          display:flex;
          flex-direction:column;

          margin:auto;
      }

`;