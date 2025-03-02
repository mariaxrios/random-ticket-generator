
import React from 'react';
import { formatText } from '../../utils/ticketUtils';

interface TicketInfoProps {
  loyaltyPoints: number;
  bagsSaved: number;
  carbonFootprint: number;
  infoColor: string;
  ecoColor: string;
  layout: number;
  useUppercase: boolean;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ 
  loyaltyPoints, bagsSaved, carbonFootprint, infoColor, ecoColor, layout, useUppercase 
}) => (
  <div className={`text-xs space-y-1 ${layout % 2 === 0 ? 'border-t' : 'border-b'} py-2`}>
    <p className={infoColor}>{formatText("Puntos acumulados", useUppercase)}: {loyaltyPoints}</p>
    <p className={ecoColor}>{formatText("Has ahorrado", useUppercase)} {bagsSaved} {formatText("bolsas de plástico", useUppercase)}</p>
    <p className="text-gray-600">{formatText("Huella de carbono", useUppercase)}: {carbonFootprint}kg CO2</p>
  </div>
);

export default TicketInfo;
