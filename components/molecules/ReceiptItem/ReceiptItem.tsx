import React from "react";
import { Wrapper } from "./ReceiptItem.styles";

function ReceiptItem({ receipt }) {
   // console.log(receipt);

   return (
      <Wrapper>
         <span>Date: {` ${receipt.date}`}</span>
         <span>Liters: {` ${receipt.liters}`}</span>
         <span>Odometer: {` ${receipt.odometer}`}</span>
         <span>PricePerLiter: {` ${receipt.pricePerLiter} ${receipt.currency}`}</span>
      </Wrapper>
   );
}

export default ReceiptItem;
