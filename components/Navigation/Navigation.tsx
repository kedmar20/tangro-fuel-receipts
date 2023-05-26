import React, { useState } from "react";
import Link from "next/link";
import { OuterWrapperNavigation, StyledBurger, StyledNavigation, WrapperNavigation } from "./Navigation.styles";
import { Button, Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavigation = () => {
      setIsOpen(!isOpen);
   };
   return (
      <OuterWrapperNavigation>
         <StyledBurger onClick={toggleNavigation}>
            <div />
            <div />
            <div />
         </StyledBurger>
         <WrapperNavigation isOpen={isOpen}>
            <StyledNavigation>
               <ul>
                  <li>
                     <Button>
                        <Link onClick={toggleNavigation} href="/">
                           All Receipts
                        </Link>
                     </Button>
                  </li>

                  <li>
                     <div>
                        {/* {todo / [...new Set()]+map} */}
                        <Dropdown title="Filter by Car">
                           <Dropdown.Item as="a" href="/clhvmqzdk0006mj08ftyjig9s">
                              Cupra Formentor HD-TA-X44
                           </Dropdown.Item>

                           <Dropdown.Item as="a" href="/clhvmqzcj0002mj081no5h0m0">
                              VW Passat HD-TA-X12
                           </Dropdown.Item>

                           <Dropdown.Item as="a" href="/clhvmqzd20004mj08fqaccv59">
                              Seat Leon HD-TA-X20
                           </Dropdown.Item>
                        </Dropdown>
                     </div>
                  </li>
               </ul>
            </StyledNavigation>
         </WrapperNavigation>
      </OuterWrapperNavigation>
   );
};
