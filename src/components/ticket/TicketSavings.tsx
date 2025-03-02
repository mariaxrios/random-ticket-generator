
import React from 'react';
import { formatCurrency, formatText } from '../../utils/ticketUtils';

interface TicketSavingsProps {
  totalDiscount: number;
  savingsColor: string;
  layout: number;
  useUppercase: boolean;
}

const TicketSavings: React.FC<TicketSavingsProps> = ({ 
  totalDiscount, savingsColor, layout, useUppercase 
}) => (
  totalDiscount > 0 && (
    <div className={`text-xs ${savingsColor} font-bold p-2 ${layout % 2 === 0 ? 'text-right' : 'text-center'}`}>
      {formatText("AHORRO TOTAL", useUppercase)}: {formatCurrency(totalDiscount)}
    </div>
  )
);

export default TicketSavings;
