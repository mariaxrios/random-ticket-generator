
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
  const labels = ["ECO", "BIO", "Ecológico", "Natural", "Orgánico"];
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

const getEcoMessage = (): string => {
  const messages = [
    "Juntos cuidamos el planeta",
    "Por un futuro más verde",
    "Comprometidos con el medio ambiente",
    "Reducir, Reutilizar, Reciclar",
    "Tu elección sostenible",
    "Cuidando nuestro entorno",
    "Eco-responsables contigo"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

const getBarcodePosition = (): number => {
  return Math.floor(Math.random() * 4); // 0-3 posiciones posibles
};

const TicketPreview: React.FC<TicketPreviewProps> = ({ ticket }) => {
  const total = calculateTotal(ticket.products);
  const vat4 = calculateVAT(ticket.products, 4);
  const vat10 = calculateVAT(ticket.products, 10);
  const vat21 = calculateVAT(ticket.products, 21);
  const randomFont = useMemo(() => getRandomFont(), [ticket]);
  const barcodePosition = useMemo(() => getBarcodePosition(), [ticket]);
  const ecoMessage = useMemo(() => getEcoMessage(), [ticket]);

  const BarcodeComponent = () => (
    <div className="flex justify-center">
      <Barcode 
        value={ticket.barcode}
        width={1.2}
        height={40}
        fontSize={10}
        margin={0}
        displayValue={false}
      />
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in">
      <div className={`p-4 text-sm space-y-2 ${randomFont}`}>
        {/* Store Header */}
        <div className="text-center space-y-0.5 border-b pb-2">
          <h2 className="font-bold text-base">{ticket.store.name}</h2>
          <p className="text-xs">{ticket.store.address}</p>
          <p className="text-xs">NIF: {ticket.store.nif}</p>
          <p className="text-xs">Tienda: {ticket.store.storeNumber}</p>
          <p className="text-xs">CP: {ticket.store.postalCode}</p>
          <p className="text-xs">{ticket.store.website}</p>
        </div>

        {barcodePosition === 0 && <BarcodeComponent />}

        {/* Ticket Info */}
        <div className="text-xs grid grid-cols-2 gap-0.5">
          <p>Ticket: {ticket.ticketNumber}</p>
          <p>Fecha: {ticket.timestamp.toLocaleDateString("es-ES")}</p>
          <p>Caja: {ticket.cashierNumber}</p>
          <p>Hora: {ticket.timestamp.toLocaleTimeString("es-ES")}</p>
          <p>Empleado: {ticket.employeeId}</p>
          <p>Nombre: {ticket.employeeName}</p>
        </div>

        {barcodePosition === 1 && <BarcodeComponent />}

        {/* Products */}
        <div className="space-y-1 border-t pt-2">
          {ticket.products.map((product, index) => (
            <div key={index} className="flex justify-between text-xs leading-tight">
              <div className="flex-1">
                <span className="font-semibold">
                  {product.name} {product.isEco && getEcoLabel()}
                </span>
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
        <div className="border-t pt-2 space-y-1">
          <div className="text-xs space-y-0.5">
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
          <div className="text-base font-bold flex justify-between border-t pt-1">
            <span>TOTAL</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div className="text-xs text-gray-600">
            <p>Forma de pago: {ticket.paymentMethod.toUpperCase()}</p>
          </div>
        </div>

        {barcodePosition === 2 && <BarcodeComponent />}

        {/* Footer */}
        <div className="text-center text-xs space-y-1 border-t pt-2">
          <p className="font-semibold">Gracias por su compra</p>
          <p className="text-green-600">{ecoMessage}</p>
          <p className="text-[10px] text-gray-600">Devoluciones: 30 días con ticket</p>
          <p className="text-[10px] text-gray-600">L-S 9:00-21:30</p>
          <p className="text-[10px] text-gray-600">{ticket.store.phone}</p>
          <p className="text-[10px] text-gray-600">{ticket.store.website}</p>
        </div>

        {barcodePosition === 3 && <BarcodeComponent />}
      </div>
    </div>
  );
};

export default TicketPreview;
