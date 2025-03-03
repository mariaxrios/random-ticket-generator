
import React from 'react';
import { Product } from '../../types/ticket';
import { formatCurrency, formatText } from '../../utils/ticketUtils';
import { getEcoLabel } from '../../utils/randomGenerators';

interface TicketProductsProps {
  products: Product[];
  savingsColor: string;
  useUppercase: boolean;
}

const TicketProducts: React.FC<TicketProductsProps> = ({ products, savingsColor, useUppercase }) => (
  <div className="space-y-1 border-t pt-2">
    {products.map((product, index) => (
      <div key={index} className="flex justify-between text-xs leading-tight">
        <div className="flex-1">
          <span className="font-semibold">
            {formatText(product.name, useUppercase)} {product.isEco && formatText(getEcoLabel(), useUppercase)}
          </span>
          <br />
          <span className="text-gray-600">
            {product.quantity} {formatText(product.unit, useUppercase)} x {formatCurrency(product.price)}
            {product.unit === 'kg' && ` (${formatCurrency(product.price * product.quantity)} / kg)`}
          </span>
        </div>
        <div className="text-right">
          {formatCurrency(product.price * product.quantity)}
        </div>
      </div>
    ))}
  </div>
);

export default TicketProducts;
