
import React from 'react';
import { Store } from '../../types/ticket';
import { formatText } from '../../utils/ticketUtils';

interface TicketHeaderProps {
  store: Store;
  headerBg: string;
  useUppercase: boolean;
}

const TicketHeader: React.FC<TicketHeaderProps> = ({ store, headerBg, useUppercase }) => (
  <div className={`text-center space-y-0.5 border-b pb-2 ${headerBg} p-3 rounded-t-lg`}>
    <h2 className="font-bold text-base tracking-tight leading-none">
      {formatText(store.name, useUppercase)}
    </h2>
    <p className="text-[11px]">{formatText(store.address, useUppercase)}</p>
    <p className="text-[11px]">{store.postalCode} {formatText(store.city, useUppercase)}</p>
    <p className="font-bold text-[11px] tracking-wide">{formatText(store.nif, useUppercase)}</p>
  </div>
);

export default TicketHeader;
