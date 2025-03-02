
import React, { useMemo } from "react";
import { Ticket } from "../types/ticket";
import {
  calculateTotal,
  calculateVAT,
  calculateBagsSaved,
  calculateCarbonFootprint,
  calculateLoyaltyPoints,
  calculateTotalDiscount
} from "../utils/ticketUtils";
import {
  getRandomFont,
  getBarcodePosition,
  getEcoMessage,
  getPromoMessage,
  generateAuthCodes,
  getRandomDesign,
  getCardType
} from "../utils/randomGenerators";
import {
  formatTransactionId,
  formatInvoiceNumber,
  formatCardNumber,
  formatOperationNumber,
  formatBarcodeNumber
} from "../utils/formatUtils";

// Import ticket components
import TicketHeader from "./ticket/TicketHeader";
import TicketProducts from "./ticket/TicketProducts";
import TicketTotals from "./ticket/TicketTotals";
import TicketFooter from "./ticket/TicketFooter";
import TicketInfo from "./ticket/TicketInfo";
import TicketPromo from "./ticket/TicketPromo";
import TicketSavings from "./ticket/TicketSavings";
import TicketPaymentCard from "./ticket/TicketPaymentCard";
import TicketInvoiceDetails from "./ticket/TicketInvoiceDetails";
import TicketBarcode from "./ticket/TicketBarcode";

interface TicketPreviewProps {
  ticket: Ticket;
}

const TicketPreview: React.FC<TicketPreviewProps> = ({ ticket }) => {
  // Calculate values
  const total = calculateTotal(ticket.products);
  const vat4 = calculateVAT(ticket.products, 4);
  const vat10 = calculateVAT(ticket.products, 10);
  const vat21 = calculateVAT(ticket.products, 21);
  const totalDiscount = calculateTotalDiscount(ticket.products);

  // Generate random elements and design
  const randomFont = useMemo(() => getRandomFont(), [ticket]);
  const barcodePosition = useMemo(() => getBarcodePosition(), [ticket]);
  const invoiceDetailsPosition = useMemo(() => Math.floor(Math.random() * 4), [ticket]);
  const ecoMessage = useMemo(() => getEcoMessage(), [ticket]);
  const promoMessage = useMemo(() => getPromoMessage(), [ticket]);
  const bagsSaved = useMemo(() => calculateBagsSaved(ticket.products), [ticket.products]);
  const carbonFootprint = useMemo(() => calculateCarbonFootprint(ticket.products), [ticket.products]);
  const loyaltyPoints = useMemo(() => calculateLoyaltyPoints(total), [total]);
  const operationNumber = useMemo(() => formatOperationNumber(), [ticket]);
  // Removed duplicate declaration of invoiceDetailsPosition
  const transactionId = useMemo(() => formatTransactionId(), [ticket]);
  const invoiceNumber = useMemo(() => formatInvoiceNumber(), [ticket]);
  const barcodeNumber = useMemo(() => formatBarcodeNumber(invoiceNumber, ticket.timestamp), [invoiceNumber, ticket.timestamp]);
  const authCodes = useMemo(() => generateAuthCodes(), [ticket]);
  const design = useMemo(() => getRandomDesign(), [ticket]);
  const cardType = useMemo(() => getCardType(), [ticket]);
  const useQR = useMemo(() => Math.random() > 0.5, [ticket]);

  return (
    <div className={`w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in ${design.borderStyle} border`}>
      <div className={`p-4 text-xs leading-tight tracking-tight ${design.spacing} ${randomFont}`}>
        <TicketHeader 
          store={ticket.store} 
          headerBg={design.headerBg} 
          useUppercase={ticket.displayOptions.useUppercase} 
        />

        {barcodePosition === 0 && <TicketBarcode barcode={ticket.barcode} useQR={useQR} />}
        {invoiceDetailsPosition === 0 && (
          <TicketInvoiceDetails 
            invoiceNumber={invoiceNumber}
            timestamp={ticket.timestamp}
            cashierNumber={ticket.cashierNumber}
            operationNumber={operationNumber}
            storeNumber={ticket.store.storeNumber}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {design.layout === 0 && ticket.displayOptions.showLoyaltyPoints && (
          <TicketInfo 
            loyaltyPoints={loyaltyPoints}
            bagsSaved={bagsSaved}
            carbonFootprint={carbonFootprint}
            infoColor={design.infoColor}
            ecoColor={design.ecoColor}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {barcodePosition === 1 && <TicketBarcode barcode={ticket.barcode} useQR={useQR} />}
        {invoiceDetailsPosition === 1 && (
          <TicketInvoiceDetails 
            invoiceNumber={invoiceNumber}
            timestamp={ticket.timestamp}
            cashierNumber={ticket.cashierNumber}
            operationNumber={operationNumber}
            storeNumber={ticket.store.storeNumber}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        <TicketProducts 
          products={ticket.products} 
          savingsColor={design.savingsColor} 
          useUppercase={ticket.displayOptions.useUppercase} 
        />

        {design.layout === 1 && ticket.displayOptions.showLoyaltyPoints && (
          <TicketInfo 
            loyaltyPoints={loyaltyPoints}
            bagsSaved={bagsSaved}
            carbonFootprint={carbonFootprint}
            infoColor={design.infoColor}
            ecoColor={design.ecoColor}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {design.layout === 0 && ticket.displayOptions.showPromotions && (
          <TicketPromo 
            promoMessage={promoMessage}
            savingsColor={design.savingsColor}
            promoStyle={design.promoStyle}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        <TicketSavings 
          totalDiscount={totalDiscount}
          savingsColor={design.savingsColor}
          layout={design.layout}
          useUppercase={ticket.displayOptions.useUppercase}
        />

        {barcodePosition === 2 && <TicketBarcode barcode={ticket.barcode} useQR={useQR} />}
        {invoiceDetailsPosition === 2 && (
          <TicketInvoiceDetails 
            invoiceNumber={invoiceNumber}
            timestamp={ticket.timestamp}
            cashierNumber={ticket.cashierNumber}
            operationNumber={operationNumber}
            storeNumber={ticket.store.storeNumber}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        <TicketTotals 
          vat4={vat4}
          vat10={vat10}
          vat21={vat21}
          total={total}
          paymentMethod={ticket.paymentMethod}
          useUppercase={ticket.displayOptions.useUppercase}
        />

        {design.layout === 2 && ticket.displayOptions.showLoyaltyPoints && (
          <TicketInfo 
            loyaltyPoints={loyaltyPoints}
            bagsSaved={bagsSaved}
            carbonFootprint={carbonFootprint}
            infoColor={design.infoColor}
            ecoColor={design.ecoColor}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {design.layout === 1 && ticket.displayOptions.showPromotions && (
          <TicketPromo 
            promoMessage={promoMessage}
            savingsColor={design.savingsColor}
            promoStyle={design.promoStyle}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {ticket.paymentMethod === "card" && (
          <TicketPaymentCard 
            cardType={cardType}
            cardNumber={formatCardNumber("4532016798321456")}
            authCodes={authCodes}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {design.layout === 3 && ticket.displayOptions.showLoyaltyPoints && (
          <TicketInfo 
            loyaltyPoints={loyaltyPoints}
            bagsSaved={bagsSaved}
            carbonFootprint={carbonFootprint}
            infoColor={design.infoColor}
            ecoColor={design.ecoColor}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {design.layout === 2 && ticket.displayOptions.showPromotions && (
          <TicketPromo 
            promoMessage={promoMessage}
            savingsColor={design.savingsColor}
            promoStyle={design.promoStyle}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {invoiceDetailsPosition === 3 && (
          <TicketInvoiceDetails 
            invoiceNumber={invoiceNumber}
            timestamp={ticket.timestamp}
            cashierNumber={ticket.cashierNumber}
            operationNumber={operationNumber}
            storeNumber={ticket.store.storeNumber}
            layout={design.layout}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        <TicketFooter 
          store={ticket.store}
          transactionId={transactionId}
          ecoMessage={ecoMessage}
          showEcoMessages={ticket.displayOptions.showEcoMessages}
          footerBg={design.footerBg}
          ecoColor={design.ecoColor}
          useUppercase={ticket.displayOptions.useUppercase}
        />

        {design.layout === 3 && ticket.displayOptions.showPromotions && (
          <TicketPromo 
            promoMessage={promoMessage}
            savingsColor={design.savingsColor}
            promoStyle={design.promoStyle}
            useUppercase={ticket.displayOptions.useUppercase}
          />
        )}

        {barcodePosition === 3 && <TicketBarcode barcode={ticket.barcode} useQR={useQR} />}
      </div>
    </div>
  );
};

export default TicketPreview;
