
import React from 'react';
import { formatText } from '../../utils/ticketUtils';

interface TicketPaymentCardProps {
  cardType: string;
  cardNumber: string;
  authCodes: {
    nc: string;
    aut: string;
    aid: string;
    arc: string;
  };
  layout: number;
  useUppercase: boolean;
}

const TicketPaymentCard: React.FC<TicketPaymentCardProps> = ({ 
  cardType, cardNumber, authCodes, layout, useUppercase 
}) => (
  <div className={`text-[11px] leading-tight space-y-0.5 border-t pt-2 ${layout % 2 === 0 ? '' : 'text-center'} tracking-tight`}>
    <p className="font-medium">{formatText(cardType, useUppercase)}: {cardNumber}</p>
    <div className={`grid ${layout % 2 === 0 ? 'grid-cols-2' : 'grid-cols-4'} gap-x-2 gap-y-0.5`}>
      <p>NC: {authCodes.nc}</p>
      <p>AUT: {authCodes.aut}</p>
      <p>AID: {authCodes.aid}</p>
      <p>ARC: {authCodes.arc}</p>
    </div>
  </div>
);

export default TicketPaymentCard;
