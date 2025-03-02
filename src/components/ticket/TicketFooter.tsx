
import React from 'react';
import { Store } from '../../types/ticket';
import { formatText } from '../../utils/ticketUtils';

interface TicketFooterProps {
  store: Store;
  transactionId: string;
  ecoMessage: string;
  showEcoMessages: boolean;
  footerBg: string;
  ecoColor: string;
  useUppercase: boolean;
}

const TicketFooter: React.FC<TicketFooterProps> = ({ 
  store, transactionId, ecoMessage, showEcoMessages, footerBg, ecoColor, useUppercase 
}) => (
  <>
    <div className={`text-center space-y-0.5 border-t pt-2 ${footerBg} rounded-b-lg p-2`}>
      <p className="font-semibold text-[11px]">{formatText("Gracias por su compra", useUppercase)}</p>
      {showEcoMessages && (
        <p className={`${ecoColor} text-[11px]`}>{formatText(ecoMessage, useUppercase)}</p>
      )}
      <p className="text-[10px] text-gray-600">{formatText("Devoluciones: 30 días con ticket", useUppercase)}</p>
      <p className="text-[10px] text-gray-600">{formatText("L-S 9:00-21:30", useUppercase)}</p>
      <p className="text-[10px] text-gray-600">{store.phone}</p>
      <p className="text-[10px] text-gray-600">{formatText(store.website, useUppercase)}</p>
    </div>
    <div className="text-[10px] text-gray-600 text-center tracking-tight">
      {formatText("Consulta tu ticket en", useUppercase)} {formatText(`${store.website}/ticket/${transactionId}`, useUppercase)}
    </div>
  </>
);

export default TicketFooter;
