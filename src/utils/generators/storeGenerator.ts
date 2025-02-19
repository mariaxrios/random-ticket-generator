
import { Store } from "../../types/ticket";
import { STORE_NAMES, CITIES, STREETS } from "../constants/stores";

export const generateStore = (): Store => {
  const storeIndex = Math.floor(Math.random() * STORE_NAMES.length);
  const storeName = STORE_NAMES[storeIndex];
  const domain = storeName.toLowerCase().split(" ")[0];

  return {
    name: storeName,
    address: `${STREETS[Math.floor(Math.random() * STREETS.length)]}, ${Math.floor(Math.random() * 100)}, ${
      CITIES[Math.floor(Math.random() * CITIES.length)]
    }`,
    nif: `B${Math.floor(Math.random() * 90000000 + 10000000)}`,
    website: `www.${domain}.es`,
    phone: `+34 ${Math.floor(Math.random() * 900000000 + 100000000)}`,
  };
};
