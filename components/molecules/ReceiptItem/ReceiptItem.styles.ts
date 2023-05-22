import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   /* gap: 6px; */
   margin-bottom: 10px;
   padding: 2px 8px;
   background-color: ${({ theme }) => theme.colors.white};
   span {
      margin: 3px 6px;
      padding: 2px 5px;
      font-size: ${({ theme }) => theme.fontSize.l};
   }
`;
