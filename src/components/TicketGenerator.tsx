
import React, { useState, useEffect } from "react";
import { generateTicket } from "../utils/ticketGenerator";
import TicketPreview from "./TicketPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface TicketGeneratorProps {
  useColors?: boolean;
  useOCRFont?: boolean;
}

const TicketGenerator: React.FC<TicketGeneratorProps> = ({ useColors = true, useOCRFont = false }) => {
  const [ticket, setTicket] = useState(generateTicket(20, 30, 10, 0));
  const [totalItems, setTotalItems] = useState(20);
  const [producePercentage, setProducePercentage] = useState(30);
  const [ecoPercentage, setEcoPercentage] = useState(10);
  const [tomatoPercentage, setTomatoPercentage] = useState(0);
  const [useRealStores, setUseRealStores] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          toast.success("Ubicación obtenida correctamente");
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("No se pudo obtener la ubicación. Usando ubicación por defecto (Madrid)");
        }
      );
    } else {
      toast.error("Geolocalización no disponible en este navegador");
    }
  }, []);

  const handleGenerate = () => {
    if (totalItems < 1 || totalItems > 100) {
      toast.error("El número de artículos debe estar entre 1 y 100");
      return;
    }
    if (producePercentage < 0 || producePercentage > 100) {
      toast.error("El porcentaje de frutas y verduras debe estar entre 0 y 100");
      return;
    }
    if (ecoPercentage < 0 || ecoPercentage > 100) {
      toast.error("El porcentaje de etiquetas eco/bio debe estar entre 0 y 100");
      return;
    }
    if (tomatoPercentage < 0 || tomatoPercentage > 100) {
      toast.error("El porcentaje de tomates debe estar entre 0 y 100");
      return;
    }
    
    const newTicket = generateTicket(totalItems, producePercentage, ecoPercentage, tomatoPercentage, useRealStores, userLocation);
    newTicket.paymentMethod = paymentMethod;
    setTicket(newTicket);
  };

  return (
    <div className="container mx-auto p-4 space-y-8 animate-slide-up">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Generador de Tickets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Genera tickets realistas de supermercado con productos, precios e información de tienda aleatorios.
          {userLocation ? (
            <span className="block text-sm text-green-600">
              Usando ubicación actual: {userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)}
            </span>
          ) : (
            <span className="block text-sm text-yellow-600">
              Usando ubicación por defecto (Madrid)
            </span>
          )}
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label>Método de pago</Label>
            <RadioGroup
              defaultValue={paymentMethod}
              onValueChange={(value) => setPaymentMethod(value as "card" | "cash")}
              className="flex space-x-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Tarjeta</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Efectivo</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="totalItems" className="block text-sm font-medium text-gray-700 mb-1">
              Número de artículos
            </Label>
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
            <Label htmlFor="producePercentage" className="block text-sm font-medium text-gray-700 mb-1">
              % Frutas y verduras
            </Label>
            <Input
              id="producePercentage"
              type="number"
              min="0"
              max="100"
              value={producePercentage}
              onChange={(e) => setProducePercentage(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="tomatoPercentage" className="block text-sm font-medium text-gray-700 mb-1">
              % Tomates (dentro de frutas y verduras)
            </Label>
            <Input
              id="tomatoPercentage"
              type="number"
              min="0"
              max="100"
              value={tomatoPercentage}
              onChange={(e) => setTomatoPercentage(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="ecoPercentage" className="block text-sm font-medium text-gray-700 mb-1">
              % Etiquetas ECO/BIO
            </Label>
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

        <div className="space-y-2">
          <Label>Tipo de tienda</Label>
          <RadioGroup
            defaultValue={useRealStores ? "real" : "fictional"}
            onValueChange={(value) => setUseRealStores(value === "real")}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fictional" id="fictional" />
              <Label htmlFor="fictional">Ficticias</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="real" id="real" />
              <Label htmlFor="real">Reales</Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={handleGenerate} className="w-full">
          Generar nuevo ticket
        </Button>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
        <TicketPreview ticket={ticket} useColors={useColors} useOCRFont={useOCRFont} />
      </div>
    </div>
  );
};

export default TicketGenerator;
