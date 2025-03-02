
// This function generates a barcode number for a ticket
export const generateBarcode = (
  ticketNumber: string,
  timestamp: Date,
  storeNumber: string,
  postalCode: string
): string => {
  // Generate 3 random digits for the first part
  const randomPrefix = Math.floor(Math.random() * 900 + 100).toString();
  
  // Get first 4 digits of ticket number
  const ticketFirstPart = ticketNumber.slice(0, 4);
  
  // Format date as DDMMYYYY
  const day = timestamp.getDate().toString().padStart(2, '0');
  const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
  const year = timestamp.getFullYear();
  const formattedDate = `${day}${month}${year}`;
  
  // Get second 3 digits of ticket number
  const ticketSecondPart = ticketNumber.slice(4, 7);
  
  // Get last 6 digits of ticket number
  const ticketLastPart = ticketNumber.slice(-6);
  
  // Add 12 zeros
  const zerosPart = "000000000000";
  
  // Generate 1 random digit for the end
  const randomSuffix = Math.floor(Math.random() * 10).toString();
  
  // Combine all parts
  return `${randomPrefix}${ticketFirstPart}${formattedDate}${ticketSecondPart}${ticketLastPart}${zerosPart}${randomSuffix}`;
};
