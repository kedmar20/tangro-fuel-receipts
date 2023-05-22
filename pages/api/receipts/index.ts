import { ReceiptFetched } from "@/models/ReceiptsFetched";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "GET") {
      const response = await fetch("https://tangro-demo-api.vercel.app/api/receipts", {
         headers: {
            Authorization: `Bearer ${process.env.RECEIPTS_API_KEY}`,
         },
      });
      const allReceipts: ReceiptFetched = await response.json();
      // console.log(allReceipts);

      res.status(200).json(allReceipts);
   }

   if (req.method === "POST") {
      // console.log("POST");
      const receiptObj = req.body; // {}
      // console.log(JSON.stringify(receiptObj));
      const response = await fetch("https://tangro-demo-api.vercel.app/api/receipts", {
         method: "POST",
         body: JSON.stringify(receiptObj),

         headers: {
            Authorization: `Bearer ${process.env.RECEIPTS_API_KEY}`,
         },
      });

      res.status(200).json(response);
   }
}
