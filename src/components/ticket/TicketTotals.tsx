
import React from 'react';
import { formatCurrency, formatText } from '../../utils/ticketUtils';

interface TicketTotalsProps {
  vat4: number;
  vat10: number;
  vat21: number;
  total: number;
  paymentMethod: string;
  useUppercase: boolean;
}

const TicketTotals: React.FC<TicketTotalsProps> = ({ 
  vat4, vat10, vat21, total, paymentMethod, useUppercase 
}) => (
  <div className="border-t pt-2 space-y-1">
    <div className="text-xs space-y-0.5">
      <p className="flex justify-between">
        <span>{formatText("IVA 4%", useUppercase)}:</span>
        <span>{formatCurrency(vat4)}</span>
      </p>
      <p className="flex justify-between">
        <span>{formatText("IVA 10%", useUppercase)}:</span>
        <span>{formatCurrency(vat10)}</span>
      </p>
      <p className="flex justify-between">
        <span>{formatText("IVA 21%", useUppercase)}:</span>
        <span>{formatCurrency(vat21)}</span>
      </p>
    </div>
    <div className="text-base font-bold flex justify-between border-t pt-1">
      <span>{formatText("TOTAL", useUppercase)} {formatText(paymentMethod === "card" ? "TARJETA" : "EFECTIVO", useUppercase)}</span>
      <span>{formatCurrency(total)}</span>
    </div>
  </div>
);

export default TicketTotals;
