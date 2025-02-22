
const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}${year}`;
};

export const generateBarcode = (ticketNumber: string, timestamp: Date, storeId: string): string => {
  // Usamos los últimos 4 dígitos del ticket + fecha + ID tienda
  const ticketPart = ticketNumber.slice(-4);
  const date = formatDate(timestamp);
  const storePart = storeId.slice(-4);
  return `${ticketPart}${date}${storePart}`;
};
