import styled from "styled-components";
// import React from "react";
// import Logo from "assets/icons/logo-black.svg";

type LogoProps = {
   isMobile?: boolean;
   isSmall?: boolean;
   Logo?: void;
   isOpen?: boolean;
};
export const OuterWrapperNavigation = styled.div`
   background-color: ${({ theme }) => theme.colors.darkPurple};
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 120px;
   /* padding: 20px; */
   position: absolute;
   top: 0;
   z-index: 1000;
`;

export const WrapperNavigation = styled.div<LogoProps>`
   display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
   flex-direction: column;
   width: 100%;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;

   align-items: center;
   justify-content: space-between;
   padding: 50px;

   ${({ theme }) => theme.mq.desktop} {
      /* position: static; */
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      /* height: unset; */
      background-color: ${({ theme }) => theme.colors.darkPurple};
      align-items: center;
      justify-content: center;
      /* padding: 25px 45px; */
   }
`;

// export const StyledLogo = styled(({ isMobile, isSmall, ...props }) => <Logo {...props} />)`
//    width: ${({ isSmall }) => (isSmall ? "100px" : "150px")};
//    ${({ theme }) => theme.mq.desktop} {
//       display: ${({ isMobile }) => (isMobile ? "none" : "initial")};
//    }
// `;

export const StyledBurger = styled.button`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 4rem;
   height: 4rem;
   background-color: transparent;
   border: none;
   cursor: pointer;
   /* margin: 3px 3px auto 3px; */
   /* padding: 1px; */
   z-index: 10;

   div {
      width: 100%;
      height: 0.2rem;
      background: white;
      position: relative;
   }

   ${({ theme }) => theme.mq.desktop} {
      display: none;
   }
`;

export const StyledNavigation = styled.nav`
   ul {
      list-style: none;
      padding: 0 10px;
      text-align: center;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      ${({ theme }) => theme.mq.desktop} {
         flex-direction: row;
         align-items: center;
         gap: 50px;

         li {
            a {
               padding: 0;
               margin: 0;
            }
         }
      }
   }

   ${({ theme }) => theme.mq.desktop} {
      margin: auto;
   }
`;
