
import React from 'react';
import Barcode from 'react-barcode';
import { QRCodeSVG } from 'qrcode.react';

interface TicketBarcodeProps {
  barcode: string;
  useQR: boolean;
}

const TicketBarcode: React.FC<TicketBarcodeProps> = ({ barcode, useQR }) => (
  useQR ? (
    <div className="flex justify-center p-2">
      <QRCodeSVG value={barcode} size={100} />
    </div>
  ) : (
    <div className="flex justify-center">
      <Barcode 
        value={barcode}
        width={1.2}
        height={40}
        fontSize={10}
        margin={0}
        displayValue={false}
      />
    </div>
  )
);

export default TicketBarcode;
