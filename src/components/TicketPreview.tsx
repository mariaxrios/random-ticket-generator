
import React, { useMemo } from "react";
import { Ticket, Product } from "../types/ticket";
import Barcode from "react-barcode";

interface TicketPreviewProps {
  ticket: Ticket;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

const calculateTotal = (products: Product[]) => {
  return products.reduce((total, product) => {
    const price = product.price * product.quantity;
    const discount = price * (product.discount || 0) / 100;
    return total + (price - discount);
  }, 0);
};

const calculateVAT = (products: Product[], vatRate: number) => {
  return products
    .filter(p => p.vatRate === vatRate)
    .reduce((total, product) => {
      const price = product.price * product.quantity;
      const discount = price * (product.discount || 0) / 100;
      const netPrice = price - discount;
      return total + (netPrice * vatRate) / (100 + vatRate);
    }, 0);
};

const getEcoLabel = (): string => {
  const labels = ["ECO", "BIO", "Ecológico", "Natural"];
  return labels[Math.floor(Math.random() * labels.length)];
};

const getRandomFont = (): string => {
  const fonts = [
    "font-mono",
    "font-roboto-mono",
    "font-space-mono",
    "font-source-code-pro",
    "font-ubuntu-mono",
    "font-fira-mono"
  ];
  return fonts[Math.floor(Math.random() * fonts.length)];
};

const TicketPreview: React.FC<TicketPreviewProps> = ({ ticket }) => {
  const total = calculateTotal(ticket.products);
  const vat4 = calculateVAT(ticket.products, 4);
  const vat10 = calculateVAT(ticket.products, 10);
  const vat21 = calculateVAT(ticket.products, 21);

  // Usa useMemo para mantener la misma fuente mientras no cambie el ticket
  const randomFont = useMemo(() => getRandomFont(), [ticket]);

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in">
      <div className={`p-6 text-sm space-y-4 ${randomFont}`}>
        {/* Store Header */}
        <div className="text-center border-b pb-4 space-y-1">
          <h2 className="font-bold text-lg">{ticket.store.name}</h2>
          <p>{ticket.store.address}</p>
          <p>NIF: {ticket.store.nif}</p>
          <p>{ticket.store.website}</p>
        </div>

        {/* Ticket Info */}
        <div className="text-xs grid grid-cols-2 gap-1">
          <p>Ticket: {ticket.ticketNumber}</p>
          <p>Fecha: {ticket.timestamp.toLocaleDateString("es-ES")}</p>
          <p>Caja: {ticket.cashierNumber}</p>
          <p>Hora: {ticket.timestamp.toLocaleTimeString("es-ES")}</p>
          <p>Empleado: {ticket.employeeId}</p>
          <p>Nombre: {ticket.employeeName}</p>
        </div>

        {/* Products */}
        <div className="space-y-3 border-t pt-3">
          {ticket.products.map((product, index) => (
            <div key={index} className="flex justify-between text-xs">
              <div className="flex-1">
                <span className="font-semibold">{product.name}</span>
                {product.isEco && (
                  <span className="text-gray-600 ml-1 text-[10px]">({getEcoLabel()})</span>
                )}
                <br />
                <span className="text-gray-600">
                  {product.quantity} {product.unit} x {formatCurrency(product.price)}
                </span>
              </div>
              <div className="text-right">
                {product.discount ? (
                  <>
                    <span className="line-through text-gray-400">
                      {formatCurrency(product.price * product.quantity)}
                    </span>
                    <br />
                    <span className="text-red-500">
                      -{product.discount}% = {formatCurrency(
                        (product.price * product.quantity * (100 - product.discount)) / 100
                      )}
                    </span>
                  </>
                ) : (
                  formatCurrency(product.price * product.quantity)
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="border-t pt-4 space-y-2">
          <div className="text-xs space-y-1">
            <p className="flex justify-between">
              <span>IVA 4%:</span>
              <span>{formatCurrency(vat4)}</span>
            </p>
            <p className="flex justify-between">
              <span>IVA 10%:</span>
              <span>{formatCurrency(vat10)}</span>
            </p>
            <p className="flex justify-between">
              <span>IVA 21%:</span>
              <span>{formatCurrency(vat21)}</span>
            </p>
          </div>
          <div className="text-lg font-bold flex justify-between border-t pt-2">
            <span>TOTAL</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div className="text-xs text-gray-600">
            <p>Forma de pago: {ticket.paymentMethod.toUpperCase()}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs space-y-2 border-t pt-4">
          <p className="font-semibold">Gracias por su compra en {ticket.store.name}</p>
          <p>Juntos cuidamos el planeta.</p>
          <p className="text-gray-600">Política de devoluciones: 30 días con ticket y embalaje original</p>
          <p className="text-gray-600">Lunes a sábado de 9:00 a 21:30</p>
          <p className="text-gray-600">
            {ticket.store.phone} | {ticket.store.website}
          </p>
          <div className="mt-4 flex justify-center">
            <Barcode 
              value={ticket.barcode}
              width={1.5}
              height={50}
              fontSize={12}
              margin={0}
              displayValue={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
