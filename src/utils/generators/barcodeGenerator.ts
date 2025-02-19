
const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}${year}`;
};

export const generateBarcode = (timestamp: Date): string => {
  const storeId = (4000 + Math.floor(Math.random() * 1000)).toString();
  const ticketNum = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
  const date = formatDate(timestamp);
  const checksum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${storeId}${ticketNum}${date}${checksum}`;
};
