
import { Store, Product, Ticket } from "../types/ticket";

const STORE_NAMES = [
  "EcoMarket Supermercados S.A.U.",
  "BioAliment Supermercados",
  "NaturalShop Market",
  "GreenGrocer S.A.U.",
  "VitaMarket Ecológico",
];

const CITIES = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];
const STREETS = ["Gran Vía", "Paseo de Gracia", "Calle Mayor", "Avenida Principal", "Plaza Central"];

const generateStore = (): Store => {
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

const PRODUCTS: Array<Omit<Product, "price" | "quantity" | "discount" | "isEco">> = [
  { name: "Plátanos", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Manzanas", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Zanahorias", category: "Verduras", unit: "kg", vatRate: 4 },
  // ... Add all products from the list with their respective categories and VAT rates
];

const generateProducts = (): Product[] => {
  const numProducts = Math.floor(Math.random() * 11 + 30); // 30-40 products
  const products: Product[] = [];

  for (let i = 0; i < numProducts; i++) {
    const baseProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    products.push({
      ...baseProduct,
      price: Number((Math.random() * 10 + 0.5).toFixed(2)),
      quantity: Number((Math.random() * 3 + 0.1).toFixed(2)),
      discount: Math.random() < 0.3 ? Math.floor(Math.random() * 21 + 5) : 0, // 5-25% discount
      isEco: Math.random() < 0.5, // 50% chance of being eco
    });
  }

  return products;
};

const generateBarcode = (timestamp: Date): string => {
  const storeId = Math.floor(Math.random() * 9000 + 1000).toString();
  const ticketNum = Math.floor(Math.random() * 90000000 + 10000000).toString();
  const date = timestamp
    .toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, "");
  const checksum = Math.floor(Math.random() * 9000 + 1000).toString();

  return `${storeId}${ticketNum}${date}${checksum}`;
};

export const generateTicket = (): Ticket => {
  const timestamp = new Date();
  const paymentMethods = ["cash", "card", "contactless", "bizum"] as const;

  return {
    store: generateStore(),
    products: generateProducts(),
    timestamp,
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
    ticketNumber: Math.floor(Math.random() * 900000 + 100000).toString(),
    barcode: generateBarcode(timestamp),
  };
};
