import ReceiptItem from "@/components/molecules/ReceiptItem/ReceiptItem";
import { ReceiptFetched } from "@/models/ReceiptsFetched";
import { VehicleReceipt } from "@/models/VehicleReceipts";
import React from "react";

interface ReceiptItemLiestProps {
   receipeets: ReceiptFetched[];
   handleDelete2(id: string): void;
}

const ReceiptItemLiest: React.FunctionComponent<ReceiptItemLiestProps> = ({ receipeets, handleDelete2 }) => {
   // console.log(receipeets);

   return (
      <div>
         ReceiptItemLiest
         {receipeets?.map((receipt) => (
            <ReceiptItem key={receipt.id} receipt={receipt} handleDelete={handleDelete2} />
         ))}
      </div>
   );
};

export default ReceiptItemLiest;
