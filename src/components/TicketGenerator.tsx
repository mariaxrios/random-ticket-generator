
import React, { useState } from "react";
import { generateTicket } from "../utils/ticketGenerator";
import TicketPreview from "./TicketPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const TicketGenerator = () => {
  const [ticket, setTicket] = useState(generateTicket());
  const [email, setEmail] = useState("");
  const [totalItems, setTotalItems] = useState(30);
  const [ecoPercentage, setEcoPercentage] = useState(50);

  const handleGenerate = () => {
    if (totalItems < 1 || totalItems > 100) {
      toast.error("El número de artículos debe estar entre 1 y 100");
      return;
    }
    if (ecoPercentage < 0 || ecoPercentage > 100) {
      toast.error("El porcentaje ecológico debe estar entre 0 y 100");
      return;
    }
    setTicket(generateTicket(totalItems, ecoPercentage));
  };

  const handleDownload = () => {
    // This is a placeholder for the download functionality
    toast.success("Ticket download started");
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
    // This is a placeholder for the email sending functionality
    toast.success(`Ticket sent to ${email}`);
  };

  return (
    <div className="container mx-auto p-4 space-y-8 animate-slide-up">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Generador de Tickets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Generate realistic supermarket receipts with random products, prices, and store information.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="totalItems" className="block text-sm font-medium text-gray-700 mb-1">
              Número de artículos
            </label>
            <Input
              id="totalItems"
              type="number"
              min="1"
              max="100"
              value={totalItems}
              onChange={(e) => setTotalItems(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="ecoPercentage" className="block text-sm font-medium text-gray-700 mb-1">
              % Productos ecológicos
            </label>
            <Input
              id="ecoPercentage"
              type="number"
              min="0"
              max="100"
              value={ecoPercentage}
              onChange={(e) => setEcoPercentage(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button onClick={handleGenerate} className="bg-black hover:bg-gray-800 text-white">
            Generate New Ticket
          </Button>
          <Button onClick={handleDownload} variant="outline">
            Download Ticket
          </Button>
        </div>

        <form onSubmit={handleSendEmail} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter email to receive ticket"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
        <TicketPreview ticket={ticket} />
      </div>
    </div>
  );
};

export default TicketGenerator;
