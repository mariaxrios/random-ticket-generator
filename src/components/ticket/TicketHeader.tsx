
import React from 'react';
import { Store } from '../../types/ticket';
import { formatText } from '../../utils/ticketUtils';

interface TicketHeaderProps {
  store: Store;
  headerBg: string;
  useUppercase: boolean;
}

const TicketHeader: React.FC<TicketHeaderProps> = ({ 
  store, headerBg, useUppercase 
}) => (
  <div className={`mb-4 text-center ${headerBg} rounded p-2`}>
    <div className="font-bold">
      {formatText(store.name, useUppercase)}
    </div>
    <div>
      {formatText(store.address, useUppercase)}
    </div>
    <div>
      {formatText(`${store.postalCode} ${store.city}`, useUppercase)}
    </div>
    <div>
      {formatText(`NIF: ${store.nif}`, useUppercase)}
    </div>
  </div>
);

export default TicketHeader;
