import { Ticket } from "../types/ticket";
import { generateStore } from "./generators/storeGenerator";
import { generateProducts } from "./generators/productGenerator";
import { generateEmployeeName } from "./generators/employeeGenerator";
import { generateBarcode } from "./generators/barcodeGenerator";

const isWithinOpeningHours = (date: Date): boolean => {
  const hours = date.getHours();
  return hours >= 9 && hours < 22; // 9:00 AM - 10:00 PM
};

const generateRandomTimeWithinOpeningHours = (): number => {
  // Return random hour between 9 and 21 (9:00 AM - 9:59 PM)
  return Math.floor(Math.random() * 13) + 9;
};

const generateValidTimestamp = (): Date => {
  const now = new Date();
  const result = new Date(now);

  // Check if current time is within opening hours
  if (!isWithinOpeningHours(now)) {
    // If outside opening hours, set date to previous day
    result.setDate(result.getDate() - 1);
    
    // Set a random hour within opening hours
    const randomHour = generateRandomTimeWithinOpeningHours();
    result.setHours(
      randomHour,
      Math.floor(Math.random() * 60), // Random minutes
      Math.floor(Math.random() * 60), // Random seconds
      0
    );
  } else {
    // Si estamos dentro del horario de apertura, priorizar la fecha y hora actual
    return now;
  }

  return result;
};

export const generateTicket = (
  totalItems: number = 20,
  producePercentage: number = 30,
  ecoPercentage: number = 10,
  tomatoPercentage: number = 0,
  useRealStores: boolean = false,
  userLocation?: { latitude: number; longitude: number }
): Ticket => {
  const timestamp = generateValidTimestamp();
  const paymentMethods = ["cash", "card", "contactless", "bizum"] as const;
  const ticketNumber = Math.floor(Math.random() * 900000 + 100000).toString();
  const store = generateStore(userLocation, useRealStores);
  
  // Generate random options for ticket display with updated percentages
  const useUppercase = Math.random() < 0.5; // 50% chance of uppercase (increased from 30%)
  const showLoyaltyPoints = Math.random() < 0.3; // 30% chance of showing points (decreased from 70%)
  const showPromotions = Math.random() < 0.3; // 30% chance of showing promotions (decreased from 80%)
  const showEcoMessages = Math.random() < 0.3; // 30% chance of showing eco messages (decreased from 60%)

  return {
    store,
    products: generateProducts(totalItems, producePercentage, ecoPercentage, tomatoPercentage),
    timestamp,
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
    ticketNumber,
    cashierNumber: Math.floor(Math.random() * 20) + 1,
    employeeId: `E${Math.floor(Math.random() * 9000 + 1000)}`,
    employeeName: generateEmployeeName(),
    barcode: generateBarcode(ticketNumber, timestamp, store.storeNumber, store.postalCode),
    displayOptions: {
      useUppercase,
      showLoyaltyPoints,
      showPromotions,
      showEcoMessages
    }
  };
};
