
import React from 'react';
import { formatText } from '../../utils/ticketUtils';

interface TicketInvoiceDetailsProps {
  invoiceNumber: string;
  timestamp: Date;
  cashierNumber: number;
  operationNumber: string;
  storeNumber: string;
  layout: number;
  useUppercase: boolean;
}

const TicketInvoiceDetails: React.FC<TicketInvoiceDetailsProps> = ({
  invoiceNumber,
  timestamp,
  cashierNumber,
  operationNumber,
  storeNumber,
  layout,
  useUppercase
}) => (
  <div className={`text-[11px] ${layout % 2 === 0 ? 'grid grid-cols-2' : 'space-y-0.5'} gap-0.5`}>
    <p>{formatText("Factura", useUppercase)}: {invoiceNumber}</p>
    <p>{formatText("Fecha", useUppercase)}: {timestamp.toLocaleDateString("es-ES")}</p>
    <p>{formatText("Caja", useUppercase)}: {cashierNumber}</p>
    <p>{formatText("Hora", useUppercase)}: {timestamp.toLocaleTimeString("es-ES")}</p>
    <p>{formatText("Operación", useUppercase)}: {operationNumber}</p>
    <p>{formatText("Tienda", useUppercase)}: {storeNumber}</p>
  </div>
);

export default TicketInvoiceDetails;
