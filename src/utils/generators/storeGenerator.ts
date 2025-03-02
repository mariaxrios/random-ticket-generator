
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
  
  // Generate postal code based on the municipality's region
  let postalCode;
  
  // Códigos postales reales según región
  switch (region.name) {
    case "Madrid":
      postalCode = `280${Math.floor(Math.random() * 55).toString().padStart(2, '0')}`; // 28001-28055
      break;
    case "Barcelona":
    case "Cataluña":
      postalCode = `080${Math.floor(Math.random() * 40).toString().padStart(2, '0')}`; // 08001-08040
      break;
    case "Valencia":
    case "Comunidad Valenciana":
      postalCode = `460${Math.floor(Math.random() * 30).toString().padStart(2, '0')}`; // 46001-46030
      break;
    case "Sevilla":
    case "Andalucía":
      postalCode = `410${Math.floor(Math.random() * 30).toString().padStart(2, '0')}`; // 41001-41030
      break;
    case "Galicia":
      postalCode = `150${Math.floor(Math.random() * 30).toString().padStart(2, '0')}`; // 15001-15030 (A Coruña)
      break;
    case "Asturias":
      postalCode = `330${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 33001-33020 (Oviedo)
      break;
    case "Cantabria":
      postalCode = `390${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 39001-39020 (Santander)
      break;
    case "País Vasco":
      postalCode = `480${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 48001-48020 (Bilbao)
      break;
    case "Navarra":
      postalCode = `310${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 31001-31020 (Pamplona)
      break;
    case "La Rioja":
      postalCode = `260${Math.floor(Math.random() * 10).toString().padStart(2, '0')}`; // 26001-26010 (Logroño)
      break;
    case "Aragón":
      postalCode = `500${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 50001-50020 (Zaragoza)
      break;
    case "Castilla y León":
      postalCode = `470${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 47001-47020 (Valladolid)
      break;
    case "Castilla-La Mancha":
      postalCode = `450${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 45001-45020 (Toledo)
      break;
    case "Extremadura":
      postalCode = `060${Math.floor(Math.random() * 10).toString().padStart(2, '0')}`; // 06001-06010 (Badajoz)
      break;
    case "Murcia":
      postalCode = `300${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 30001-30020 (Murcia)
      break;
    case "Islas Baleares":
      postalCode = `070${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 07001-07020 (Palma)
      break;
    case "Canarias":
      postalCode = `350${Math.floor(Math.random() * 20).toString().padStart(2, '0')}`; // 35001-35020 (Las Palmas)
      break;
    default:
      // Fallback to Madrid postal code
      postalCode = `280${Math.floor(Math.random() * 55).toString().padStart(2, '0')}`;
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
      case "Eroski":
        return `E${number.toString().padStart(4, '0')}`;
      case "Alcampo":
        return `A${number.toString().padStart(4, '0')}`;
      case "Consum":
        return `CN${number.toString().padStart(3, '0')}`;
      case "Ahorramás":
        return `AH${number.toString().padStart(3, '0')}`;
      case "El Corte Inglés Supermercado":
        return `ECI${number.toString().padStart(3, '0')}`;
      case "Supercor":
        return `SC${number.toString().padStart(3, '0')}`;
      default:
        return number.toString();
    }
  };

  if (useRealStores) {
    const storeIndex = Math.floor(Math.random() * REAL_STORE_DATA.length);
    const storeData = REAL_STORE_DATA[storeIndex];
    const localPhone = Math.floor(Math.random() * 900000000 + 100000000).toString();

    return {
      name: `${storeData.name} ${storeData.type}`,
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
