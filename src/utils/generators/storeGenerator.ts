
import { Store } from "../../types/ticket";
import { STORE_NAMES } from "../constants/stores";
import { computeDestinationPoint } from 'geolib';

const CALLES = [
  "Calle Mayor", "Avenida Principal", "Plaza del Sol", "Calle Real",
  "Gran Vía", "Paseo de la Castellana", "Calle del Carmen", "Avenida de la Constitución",
  "Calle San Francisco", "Plaza España", "Calle Nueva", "Avenida de la Paz",
  "Calle Victoria", "Paseo Marítimo", "Calle del Mar", "Avenida de los Pinos"
];

const generateRandomCoordinate = (center: { latitude: number; longitude: number }, radiusInKm: number) => {
  const angle = Math.random() * 360;
  const distance = Math.random() * radiusInKm * 1000; // convertir a metros
  
  const destination = computeDestinationPoint(
    center,
    distance,
    angle
  );

  return {
    latitude: destination.latitude,
    longitude: destination.longitude
  };
};

const defaultLocation = {
  latitude: 40.4168, // Madrid centro
  longitude: -3.7038
};

const getLocalidadFromCoordinates = (coordinates: { latitude: number; longitude: number }): string => {
  // Aquí podríamos integrar un servicio de geocodificación inversa
  // Por ahora, usaremos Madrid como ejemplo
  if (coordinates.latitude > 40.5) return "Alcobendas";
  if (coordinates.latitude < 40.3) return "Getafe";
  if (coordinates.longitude < -3.8) return "Pozuelo";
  if (coordinates.longitude > -3.6) return "Coslada";
  return "Madrid";
};

export const generateStore = (userLocation?: { latitude: number; longitude: number }): Store => {
  const storeIndex = Math.floor(Math.random() * STORE_NAMES.length);
  const storeName = STORE_NAMES[storeIndex];
  const domain = storeName.toLowerCase().split(" ")[0];

  // Usar la ubicación del usuario o la ubicación por defecto
  const center = userLocation || defaultLocation;
  const coordinates = generateRandomCoordinate(center, 20);
  
  // Generar una dirección con calle y número aleatorios
  const calle = CALLES[Math.floor(Math.random() * CALLES.length)];
  const numero = Math.floor(Math.random() * 100) + 1;
  const localidad = getLocalidadFromCoordinates(coordinates);
  const address = `${calle}, ${numero} - ${localidad}`;

  return {
    name: storeName,
    address,
    nif: `B${Math.floor(Math.random() * 90000000 + 10000000)}`,
    website: `www.${domain}.es`,
    phone: `+34 ${Math.floor(Math.random() * 900000000 + 100000000)}`,
  };
};
