import styled from "styled-components";

const Container = styled.div`
   padding: 0 0.5rem;
   display: flex;
   flex-flow: column nowrap;
   justify-content: start;
   align-items: center;
   height: 100%;
   min-height: 100vh;
   margin-top: 100px;
   background-color: #e6e6fa;
`;
const Main = styled.main`
   padding: 3rem 0;
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   ${({ theme }) => theme.mq.desktop} {
      padding: 2rem;
   }
`;

const Title = styled.h1`
   margin: 15px 0 5px;
   line-height: 1.15;
   font-size: ${({ theme }) => theme.fontSize.l};
   text-align: center;
   text-decoration: none;

   a {
      color: ${({ theme }) => theme.colors.warning};
      text-decoration: none;
      &:hover,
      :focus,
      :active {
         text-decoration: underline;
      }
   }
`;

const Description = styled.p`
   text-align: center;
   line-height: 1.5;
   font-size: 1.5rem;
`;
const CodeTag = styled.code`
   background: #fafafa;
   border-radius: 5px;
   margin: 0 0.75rem;
   padding: 0.75rem;
   font-size: 1.1rem;
   font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;
const AddTable = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 7px;
   margin-bottom: 7px;
   input,
   select {
      border: none;
      border-radius: 5px;
      padding: 3px;
   }
`;

export { Container, Main, Title, Description, CodeTag, AddTable };
