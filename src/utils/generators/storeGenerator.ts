
import { Store } from "../../types/ticket";
import { FICTIONAL_STORE_NAMES, REAL_STORE_DATA, REGIONS, DEFAULT_REGION } from "../constants/stores";
import { computeDestinationPoint } from 'geolib';

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

const getRegionFromCoordinates = (coordinates: { latitude: number; longitude: number }) => {
  return REGIONS.find(region => {
    const { bounds } = region;
    return (
      coordinates.latitude >= bounds.minLat &&
      coordinates.latitude <= bounds.maxLat &&
      coordinates.longitude >= bounds.minLng &&
      coordinates.longitude <= bounds.maxLng
    );
  }) || DEFAULT_REGION;
};

export const generateStore = (
  userLocation?: { latitude: number; longitude: number },
  useRealStores: boolean = false
): Store => {
  const center = userLocation || defaultLocation;
  const coordinates = generateRandomCoordinate(center, 20);
  const region = getRegionFromCoordinates(coordinates);
  
  // Seleccionar municipio y calle aleatorios de la región
  const municipality = region.municipalities[Math.floor(Math.random() * region.municipalities.length)];
  const street = region.streets[Math.floor(Math.random() * region.streets.length)];
  const numero = Math.floor(Math.random() * 100) + 1;
  const address = `${street}, ${numero} - ${municipality}`;

  if (useRealStores) {
    // Usar datos reales de tiendas
    const storeIndex = Math.floor(Math.random() * REAL_STORE_DATA.length);
    const storeData = REAL_STORE_DATA[storeIndex];

    return {
      name: storeData.name,
      address,
      nif: storeData.nif,
      website: storeData.website,
      phone: `+34 ${Math.floor(Math.random() * 900000000 + 100000000)}`,
    };
  } else {
    // Generar datos ficticios
    const storeIndex = Math.floor(Math.random() * FICTIONAL_STORE_NAMES.length);
    const storeName = FICTIONAL_STORE_NAMES[storeIndex];
    const domain = storeName.toLowerCase().split(" ")[0];

    return {
      name: storeName,
      address,
      nif: `B${Math.floor(Math.random() * 90000000 + 10000000)}`,
      website: `www.${domain}.es`,
      phone: `+34 ${Math.floor(Math.random() * 900000000 + 100000000)}`,
    };
  }
};
