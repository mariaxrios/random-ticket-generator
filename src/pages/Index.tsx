
import React, { useState } from "react";
import TicketGenerator from "@/components/TicketGenerator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [useColors, setUseColors] = useState(true);
  const [useOCRFont, setUseOCRFont] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="useColors" 
            checked={useColors} 
            onCheckedChange={(checked) => setUseColors(checked as boolean)} 
          />
          <Label htmlFor="useColors">Mostrar colores en el ticket</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="useOCRFont" 
            checked={useOCRFont} 
            onCheckedChange={(checked) => setUseOCRFont(checked as boolean)} 
          />
          <Label htmlFor="useOCRFont">Usar fuente OCR-B</Label>
        </div>
      </div>
      <TicketGenerator useColors={useColors} useOCRFont={useOCRFont} />
    </div>
  );
};

export default Index;
