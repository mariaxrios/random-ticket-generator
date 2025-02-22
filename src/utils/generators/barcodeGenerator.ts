
const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}${year}`;
};

const generateRandomNumbers = (length: number): string => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

export const generateBarcode = (
  ticketNumber: string,
  timestamp: Date,
  storeId: string,
  postalCode: string = "28001" // Default Madrid centro si no se proporciona
): string => {
  // Usamos los últimos 4 dígitos del ticket
  const ticketPart = ticketNumber.slice(-4);
  // Usamos la fecha en formato DDMMYY
  const datePart = formatDate(timestamp);
  // Usamos los últimos 3 dígitos del código postal
  const postalPart = postalCode.slice(-3);
  // Usamos los últimos 3 dígitos del ID de tienda
  const storePart = storeId.slice(-3);
  
  // Calculamos cuántos dígitos aleatorios necesitamos
  // 22 - (4 + 6 + 3 + 3) = 6 dígitos aleatorios
  const randomPart = generateRandomNumbers(6);
  
  // Concatenamos todo en el orden especificado
  return `${ticketPart}${datePart}${postalPart}${storePart}${randomPart}`;
};
