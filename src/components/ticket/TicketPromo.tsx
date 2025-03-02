
import React from 'react';
import { formatText } from '../../utils/ticketUtils';

interface TicketPromoProps {
  promoMessage: string;
  savingsColor: string;
  promoStyle: string;
  useUppercase: boolean;
}

const TicketPromo: React.FC<TicketPromoProps> = ({ 
  promoMessage, savingsColor, promoStyle, useUppercase 
}) => (
  <div className={`text-xs font-bold ${savingsColor} ${promoStyle} p-2 rounded`}>
    {formatText(promoMessage, useUppercase)}
  </div>
);

export default TicketPromo;
