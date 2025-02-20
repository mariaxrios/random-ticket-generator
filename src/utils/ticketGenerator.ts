
import { Ticket } from "../types/ticket";
import { generateStore } from "./generators/storeGenerator";
import { generateProducts } from "./generators/productGenerator";
import { generateEmployeeName } from "./generators/employeeGenerator";
import { generateBarcode } from "./generators/barcodeGenerator";

const generateValidTimestamp = (): Date => {
  const now = new Date();
  const result = new Date(now);

  // Generar una fecha aleatoria dentro de los últimos 5 días
  const daysAgo = Math.floor(Math.random() * 5);
  result.setDate(result.getDate() - daysAgo);

  // Generar una hora aleatoria entre 9:00 y 21:30
  const minHour = 9;
  const maxHour = 21;
  const maxMinute = result.getHours() === maxHour ? 30 : 59; // Si es 21h, máximo 30 minutos

  result.setHours(
    minHour + Math.floor(Math.random() * (maxHour - minHour + 1)),
    Math.floor(Math.random() * (maxMinute + 1)),
    Math.floor(Math.random() * 60),
    0
  );

  return result;
};

export const generateTicket = (
  totalItems: number = 30,
  ecoPercentage: number = 50,
  useRealStores: boolean = false,
  userLocation?: { latitude: number; longitude: number }
): Ticket => {
  const timestamp = generateValidTimestamp();
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
