
export const formatTransactionId = (): string => {
  return `TXN-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
};

export const formatInvoiceNumber = (): string => {
  const block1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const block2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const block3 = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `${block1}-${block2}-${block3}`;
};

export const formatCardNumber = (number: string): string => {
  return `**** **** **** ${number.slice(-4)}`;
};

export const formatOperationNumber = (): string => {
  return Math.floor(Math.random() * 100000).toString().padStart(5, '0');
};

export const formatBarcodeNumber = (invoiceNumber: string, timestamp: Date): string => {
  const randomPrefix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const invoiceFirst4 = invoiceNumber.split('-')[0];
  const date = timestamp.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '');
  const invoiceBlock2 = invoiceNumber.split('-')[1];
  const invoiceBlock3 = invoiceNumber.split('-')[2];
  const padding = "00000000000";
  const random = Math.floor(Math.random() * 10);
  
  return `${randomPrefix}${invoiceFirst4}${date}${invoiceBlock2}${invoiceBlock3}${padding}${random}`;
};
