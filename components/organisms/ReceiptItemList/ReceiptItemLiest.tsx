import ReceiptItem from "@/components/molecules/ReceiptItem/ReceiptItem";
import { ReceiptFetched } from "@/models/ReceiptsFetched";
import React from "react";
import { Wrapper } from "./ReceiptItemLiest.styles";

interface ReceiptItemLiestProps {
   receipeets: ReceiptFetched[];
}

const ReceiptItemLiest: React.FunctionComponent<ReceiptItemLiestProps> = ({ receipeets }) => {
   console.log(receipeets);

   return (
      <Wrapper>
         {receipeets?.map((receipt) => (
            <ReceiptItem key={receipt.id} receipt={receipt} />
         ))}
      </Wrapper>
   );
};

export default ReceiptItemLiest;
