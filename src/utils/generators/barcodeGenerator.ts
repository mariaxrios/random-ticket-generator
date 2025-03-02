
const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}${month}${year}`;
};

const generateRandomDigits = (length: number): string => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

export const generateBarcode = (
  ticketNumber: string,
  timestamp: Date,
  storeId: string,
  postalCode: string
): string => {
  // Generate the invoice number components
  const firstBlock = ticketNumber.slice(0, 4); // First 4 digits of ticket number
  const secondBlock = ticketNumber.slice(4, 7); // 3 digits (second block)
  const lastBlock = ticketNumber.slice(-6); // Last 6 digits of ticket number
  
  // Format date as DDMMYYYY
  const formattedDate = formatDate(timestamp);
  
  // 3 random digits at the start
  const randomPrefix = generateRandomDigits(3);
  
  // Fixed padding
  const padding = "00000000000";
  
  // 1 random digit at the end
  const randomSuffix = Math.floor(Math.random() * 10).toString();
  
  // Combine all parts in the specified order
  return `${randomPrefix}${firstBlock}${formattedDate}${secondBlock}${lastBlock}${padding}${randomSuffix}`;
};
