
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
  const address = `${street}, ${numero}`;
  
  // Códigos postales reales según región
  let postalCode;
  switch (region.name) {
    case "Madrid":
      postalCode = `280${Math.floor(Math.random() * 55).toString().padStart(2, '0')}`; // 28001-28055
      break;
    case "Barcelona":
      postalCode = `080${Math.floor(Math.random() * 40).toString().padStart(2, '0')}`; // 08001-08040
      break;
    case "Valencia":
      postalCode = `460${Math.floor(Math.random() * 30).toString().padStart(2, '0')}`; // 46001-46030
      break;
    case "Sevilla":
      postalCode = `410${Math.floor(Math.random() * 30).toString().padStart(2, '0')}`; // 41001-41030
      break;
    default:
      // Para otras regiones usamos el primer código postal de provincia
      const provinceCode = region.name === "Cataluña" ? "08" : 
                          region.name === "Andalucía" ? "41" :
                          region.name === "Comunidad Valenciana" ? "46" : "28";
      postalCode = `${provinceCode}${Math.floor(Math.random() * 999).toString().padStart(3, '0')}`;
  }

  // Generar número de tienda con formato específico según cadena
  const generateFormattedStoreNumber = (isRealStore: boolean, storeName?: string): string => {
    const number = Math.floor(Math.random() * 9000 + 1000);
    if (!isRealStore) return number.toString();

    switch (storeName) {
      case "Mercadona":
        return `M${number.toString().padStart(4, '0')}`;
      case "Carrefour":
        return `C${number.toString().padStart(4, '0')}`;
      case "Día":
        return `D${number.toString().padStart(4, '0')}`;
      case "Lidl":
        return `L${number.toString().padStart(4, '0')}`;
      default:
        return number.toString();
    }
  };

  if (useRealStores) {
    const storeIndex = Math.floor(Math.random() * REAL_STORE_DATA.length);
    const storeData = REAL_STORE_DATA[storeIndex];
    const localPhone = Math.floor(Math.random() * 900000000 + 100000000).toString();

    // For real stores, use the region's postal code, not a random one
    return {
      name: storeData.name,
      address: `${address}`,
      city: municipality,
      nif: storeData.nif,
      website: storeData.website,
      phone: `+34 ${localPhone.slice(0, 3)} ${localPhone.slice(3, 6)} ${localPhone.slice(6)}`,
      postalCode,
      storeNumber: generateFormattedStoreNumber(true, storeData.name),
    };
  } else {
    const storeIndex = Math.floor(Math.random() * FICTIONAL_STORE_NAMES.length);
    const storeName = FICTIONAL_STORE_NAMES[storeIndex];
    const domain = storeName.toLowerCase().split(" ")[0];
    const localPhone = Math.floor(Math.random() * 900000000 + 100000000).toString();

    return {
      name: storeName,
      address: `${address}`,
      city: municipality,
      nif: `B${Math.floor(Math.random() * 90000000 + 10000000)}`,
      website: `www.${domain}.es`,
      phone: `+34 ${localPhone.slice(0, 3)} ${localPhone.slice(3, 6)} ${localPhone.slice(6)}`,
      postalCode,
      storeNumber: generateFormattedStoreNumber(false),
    };
  }
};
