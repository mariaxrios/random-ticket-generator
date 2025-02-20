
import { Ticket } from "../types/ticket";
import { generateStore } from "./generators/storeGenerator";
import { generateProducts } from "./generators/productGenerator";
import { generateEmployeeName } from "./generators/employeeGenerator";
import { generateBarcode } from "./generators/barcodeGenerator";

export const generateTicket = (
  totalItems: number = 30,
  ecoPercentage: number = 50,
  useRealStores: boolean = false,
  userLocation?: { latitude: number; longitude: number }
): Ticket => {
  const timestamp = new Date();
  const paymentMethods = ["cash", "card", "contactless", "bizum"] as const;

  return {
    store: generateStore(userLocation, useRealStores),
    products: generateProducts(totalItems, ecoPercentage),
    timestamp,
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
    ticketNumber: Math.floor(Math.random() * 900000 + 100000).toString(),
    cashierNumber: Math.floor(Math.random() * 20) + 1,
    employeeId: `E${Math.floor(Math.random() * 9000 + 1000)}`,
    employeeName: generateEmployeeName(),
    barcode: generateBarcode(timestamp),
  };
};
