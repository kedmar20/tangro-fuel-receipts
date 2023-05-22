import React from "react";

function ReceiptItem({ receipt, handleDelete }) {
   //    handleDelete(receipt.id);
   return (
      <div>
         ReceiptItem
         {` ${receipt.id}`}
         <button
            onClick={() => {
               handleDelete(receipt.id);
            }}
         ></button>
      </div>
   );
}

export default ReceiptItem;
