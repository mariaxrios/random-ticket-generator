import React, { useMemo } from "react";
import { Ticket, Product } from "../types/ticket";
import Barcode from "react-barcode";
import { QRCodeSVG } from "qrcode.react";

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

const getPromoMessage = (): string => {
  const messages = [
    "¡2x1 en productos de limpieza!",
    "Descuento del 20% en la próxima compra",
    "3x2 en productos frescos",
    "¡Regalo sorpresa en tu próxima visita!",
    "¡50% en la segunda unidad!",
    "Ofertas especiales para clientes fidelizados"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

const calculateBagsSaved = (products: Product[]): number => {
  return Math.floor(products.length / 3); // Estimación aproximada
};

const calculateCarbonFootprint = (products: Product[]): number => {
  return Number((products.length * 0.12).toFixed(2)); // kg CO2 estimados
};

const calculateLoyaltyPoints = (total: number): number => {
  return Math.floor(total * 10); // 10 puntos por euro
};

const formatTransactionId = (): string => {
  return `TXN-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
};

const formatInvoiceNumber = (): string => {
  const block1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const block2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const block3 = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `${block1}-${block2}-${block3}`;
};

const formatCardNumber = (number: string): string => {
  return `**** **** **** ${number.slice(-4)}`;
};

const generateAuthCodes = () => {
  return {
    nc: Math.floor(Math.random() * 1000000000).toString().padStart(9, '0'),
    aut: Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    aid: `A${Math.floor(Math.random() * 10000000000000).toString().padStart(13, '0')}`,
    arc: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
  };
};

const formatBarcodeNumber = (invoiceNumber: string, timestamp: Date): string => {
  const prefix = "221";
  const invoiceFirst4 = invoiceNumber.split('-')[0];
  const date = timestamp.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '');
  const invoiceBlock2 = invoiceNumber.split('-')[1];
  const invoiceBlock3 = invoiceNumber.split('-')[2];
  const padding = "00000000000";
  const random = Math.floor(Math.random() * 10);
  
  return `${prefix}${invoiceFirst4}${date}${invoiceBlock2}${invoiceBlock3}${padding}${random}`;
};

const getRandomDesign = () => {
  return {
    headerBg: ["bg-purple-50", "bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50"][Math.floor(Math.random() * 5)],
    borderStyle: ["border-dashed", "border-dotted", "border-solid"][Math.floor(Math.random() * 3)],
    spacing: ["space-y-2", "space-y-3", "space-y-4"][Math.floor(Math.random() * 3)],
    infoColor: ["text-blue-600", "text-purple-600", "text-emerald-600", "text-indigo-600"][Math.floor(Math.random() * 4)],
    ecoColor: ["text-green-600", "text-emerald-600", "text-teal-600", "text-lime-600"][Math.floor(Math.random() * 4)],
    savingsColor: ["text-orange-600", "text-amber-600", "text-red-600", "text-rose-600"][Math.floor(Math.random() * 4)],
    layout: Math.floor(Math.random() * 4), // 0-3 layouts diferentes
    promoStyle: ["bg-yellow-50", "bg-orange-50", "bg-red-50", "bg-pink-50"][Math.floor(Math.random() * 4)],
    footerBg: ["bg-gray-50", "bg-slate-50", "bg-zinc-50"][Math.floor(Math.random() * 3)],
  };
};

const getCardType = (): string => {
  const types = ["Visa", "Mastercard", "American Express", "Maestro"];
  return types[Math.floor(Math.random() * types.length)];
};

const formatOperationNumber = (): string => {
  return Math.floor(Math.random() * 100000).toString().padStart(5, '0');
};

const TicketPreview: React.FC<TicketPreviewProps> = ({ ticket }) => {
  const total = calculateTotal(ticket.products);
  const vat4 = calculateVAT(ticket.products, 4);
  const vat10 = calculateVAT(ticket.products, 10);
  const vat21 = calculateVAT(ticket.products, 21);
  const randomFont = useMemo(() => getRandomFont(), [ticket]);
  const barcodePosition = useMemo(() => getBarcodePosition(), [ticket]);
  const ecoMessage = useMemo(() => getEcoMessage(), [ticket]);
  const promoMessage = useMemo(() => getPromoMessage(), [ticket]);
  const bagsSaved = useMemo(() => calculateBagsSaved(ticket.products), [ticket.products]);
  const carbonFootprint = useMemo(() => calculateCarbonFootprint(ticket.products), [ticket.products]);
  const loyaltyPoints = useMemo(() => calculateLoyaltyPoints(total), [total]);
  const operationNumber = useMemo(() => formatOperationNumber(), [ticket]);

  const totalDiscount = ticket.products.reduce((acc, product) => {
    const price = product.price * product.quantity;
    const discount = price * (product.discount || 0) / 100;
    return acc + discount;
  }, 0);

  const CodeComponent = () => (
    useQR ? (
      <div className="flex justify-center p-2">
        <QRCodeSVG value={ticket.barcode} size={100} />
      </div>
    ) : (
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
    )
  );

  const transactionId = useMemo(() => formatTransactionId(), [ticket]);
  const invoiceNumber = useMemo(() => formatInvoiceNumber(), [ticket]);
  const barcodeNumber = useMemo(() => formatBarcodeNumber(invoiceNumber, ticket.timestamp), [invoiceNumber, ticket.timestamp]);
  const authCodes = useMemo(() => generateAuthCodes(), [ticket]);
  const design = useMemo(() => getRandomDesign(), [ticket]);
  const cardType = useMemo(() => getCardType(), [ticket]);
  const useQR = useMemo(() => Math.random() > 0.5, [ticket]);

  const renderInfoBlock = () => (
    <div className={`text-xs space-y-1 ${design.layout % 2 === 0 ? 'border-t' : 'border-b'} py-2`}>
      <p className={design.infoColor}>Puntos acumulados: {loyaltyPoints}</p>
      <p className={design.ecoColor}>Has ahorrado {bagsSaved} bolsas de plástico</p>
      <p className="text-gray-600">Huella de carbono: {carbonFootprint}kg CO2</p>
    </div>
  );

  const renderPromoBlock = () => (
    <div className={`text-xs font-bold ${design.savingsColor} ${design.promoStyle} p-2 rounded`}>
      {promoMessage}
    </div>
  );

  const renderSavingsBlock = () => (
    totalDiscount > 0 && (
      <div className={`text-xs ${design.savingsColor} font-bold p-2 ${design.layout % 2 === 0 ? 'text-right' : 'text-center'}`}>
        AHORRO TOTAL: {formatCurrency(totalDiscount)}
      </div>
    )
  );

  return (
    <div className={`w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in ${design.borderStyle} border`}>
      <div className={`p-4 text-xs leading-tight tracking-tight ${design.spacing} ${randomFont}`}>
        {/* Store Header */}
        <div className={`text-center space-y-0.5 border-b pb-2 ${design.headerBg} p-3 rounded-t-lg`}>
          <h2 className="font-bold text-base tracking-tight leading-none">
            {ticket.store.name}
          </h2>
          <p className="font-bold text-[11px] tracking-wide">{ticket.store.nif}</p>
          <p className="text-[11px]">{ticket.store.address}</p>
          <p className="text-[11px]">Tienda {ticket.store.storeNumber}</p>
          <p className="text-[11px]">CP {ticket.store.postalCode}</p>
          <p className="text-[11px]">{ticket.store.website}</p>
        </div>

        {barcodePosition === 0 && <CodeComponent />}

        {/* Ticket Info */}
        <div className={`text-[11px] ${design.layout % 2 === 0 ? 'grid grid-cols-2' : 'space-y-0.5'} gap-0.5`}>
          <p>Factura: {invoiceNumber}</p>
          <p>Fecha: {ticket.timestamp.toLocaleDateString("es-ES")}</p>
          <p>Caja: {ticket.cashierNumber}</p>
          <p>Hora: {ticket.timestamp.toLocaleTimeString("es-ES")}</p>
          <p>{operationNumber}</p>
        </div>

        {design.layout === 0 && renderInfoBlock()}
        {barcodePosition === 1 && <CodeComponent />}

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
                  {product.unit === 'kg' && ` (${formatCurrency(product.price * product.quantity)} / kg)`}
                </span>
              </div>
              <div className="text-right">
                {product.discount ? (
                  <>
                    <span className="line-through text-gray-400">
                      {formatCurrency(product.price * product.quantity)}
                    </span>
                    <br />
                    <span className={design.savingsColor}>
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

        {design.layout === 1 && renderInfoBlock()}
        {design.layout === 0 && renderPromoBlock()}
        {renderSavingsBlock()}

        {barcodePosition === 2 && <CodeComponent />}

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
            <span>TOTAL {ticket.paymentMethod === "card" ? "TARJETA" : "EFECTIVO"}</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>

        {design.layout === 2 && renderInfoBlock()}
        {design.layout === 1 && renderPromoBlock()}

        {/* Payment Details */}
        {ticket.paymentMethod === "card" && (
          <div className={`text-[11px] leading-tight space-y-0.5 border-t pt-2 ${design.layout % 2 === 0 ? '' : 'text-center'} tracking-tight`}>
            <p className="font-medium">{cardType}: {formatCardNumber("4532016798321456")}</p>
            <div className={`grid ${design.layout % 2 === 0 ? 'grid-cols-2' : 'grid-cols-4'} gap-x-2 gap-y-0.5`}>
              <p>NC: {authCodes.nc}</p>
              <p>AUT: {authCodes.aut}</p>
              <p>AID: {authCodes.aid}</p>
              <p>ARC: {authCodes.arc}</p>
            </div>
          </div>
        )}

        {design.layout === 3 && renderInfoBlock()}
        {design.layout === 2 && renderPromoBlock()}

        {/* Footer */}
        <div className={`text-center space-y-0.5 border-t pt-2 ${design.footerBg} rounded-b-lg p-2`}>
          <p className="font-semibold text-[11px]">Gracias por su compra</p>
          <p className={`${design.ecoColor} text-[11px]`}>{ecoMessage}</p>
          <p className="text-[10px] text-gray-600">Devoluciones: 30 días con ticket</p>
          <p className="text-[10px] text-gray-600">L-S 9:00-21:30</p>
          <p className="text-[10px] text-gray-600">{ticket.store.phone}</p>
          <p className="text-[10px] text-gray-600">{ticket.store.website}</p>
        </div>

        {design.layout === 3 && renderPromoBlock()}

        {/* Verification Link */}
        <div className="text-[10px] text-gray-600 text-center tracking-tight">
          Consulta tu ticket en {ticket.store.website}/ticket/{transactionId}
        </div>

        {barcodePosition === 3 && <CodeComponent />}
      </div>
    </div>
  );
};

export default TicketPreview;
