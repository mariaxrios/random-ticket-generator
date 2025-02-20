
import { Store } from "../../types/ticket";
import { STORE_NAMES } from "../constants/stores";
import { computeDestinationPoint, getDistance } from 'geolib';

const generateRandomCoordinate = (center: { latitude: number; longitude: number }, radiusInKm: number) => {
  // Generar un punto aleatorio en un círculo
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

export const generateStore = (userLocation?: { latitude: number; longitude: number }): Store => {
  const storeIndex = Math.floor(Math.random() * STORE_NAMES.length);
  const storeName = STORE_NAMES[storeIndex];
  const domain = storeName.toLowerCase().split(" ")[0];

  // Usar la ubicación del usuario o la ubicación por defecto
  const center = userLocation || defaultLocation;
  const coordinates = generateRandomCoordinate(center, 20);

  // Generar una dirección aproximada basada en las coordenadas
  const address = `Lat: ${coordinates.latitude.toFixed(4)}, Long: ${coordinates.longitude.toFixed(4)}`;

  return {
    name: storeName,
    address,
    nif: `B${Math.floor(Math.random() * 90000000 + 10000000)}`,
    website: `www.${domain}.es`,
    phone: `+34 ${Math.floor(Math.random() * 900000000 + 100000000)}`,
  };
};
