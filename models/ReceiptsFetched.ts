export interface ReceiptFetched {
   currency?: string;
   date?: string;
   id?: string;
   liters?: number;
   odometer?: number;
   pricePerLiter?: number;
   valueAddedTax?: number;
   vehicle?: { id?: string; name?: string; licensePlate?: string };
   vehicleId?: string;
}

export interface ReceiptResponse {
   receipts: ReceiptFetched[];
}
