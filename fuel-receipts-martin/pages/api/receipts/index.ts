import { log } from "console";
import { VehicleReceipt } from "models/VehicleReceipts";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "GET") {
      const response = await fetch("https://tangro-demo-api.vercel.app/api/receipts", {
         headers: {
            Authorization: `Bearer ${process.env.RECEIPTS_API_KEY}`,
         },
      });
      const allReceipts: VehicleReceipt = await response.json();
      console.log(allReceipts);

      res.status(200).json(allReceipts);
   }

   if (req.method === "POST") {
      console.log("POST");
      const receiptObj = req.body; // {}
      console.log(JSON.stringify(receiptObj));
      const response = await fetch("https://tangro-demo-api.vercel.app/api/receipts", {
         method: "POST",
         body: JSON.stringify(receiptObj),
         // body: JSON.stringify({
         //    date: "2023-05-21T00:00:00.000Z",
         //    odometer: 12345,
         //    liters: 55,
         //    pricePerLiter: 1,
         //    currency: "EUR",
         //    valueAddedTax: 19,
         //    vehicleId: "clhvmqzdk0006mj08ftyjig9s",
         // }),
         headers: {
            Authorization: `Bearer ${process.env.RECEIPTS_API_KEY}`,
         },
      });

      res.status(200).json(response);
   }
}
//
//
//
//    const response = await fetch("https://tangro-demo-api.vercel.app/api/receipts", {
//       headers: {
//          Authorization: `Bearer ${process.env.RECEIPTS_API_KEY}`,
//       },
//    });
//    const allReceipts: VehicleReceipt = await response.json();
//    console.log(allReceipts);

//    res.status(200).json(allReceipts);
// }
//
//
//

// //
//
//
// import { receipts } from "@/data/receipts";

// export default function handler(req, res) {
//    if (req.method === "GET") {
//       res.status(200).json(receipts);
//    }

//    if (req.method === "POST") {
//       const receiptObj = req.body; // {}

//       receipts.push(receiptObj);

//       res.status(200).json(receiptObj);
//    }
// }
