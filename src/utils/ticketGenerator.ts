
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
  // Frutas y verduras
  { name: "Plátanos", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Manzanas", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Zanahorias", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Espinacas", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Tomates", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Patatas", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Cebollas", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Pimientos", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Naranjas", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Uvas", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Lechuga", category: "Verduras", unit: "ud", vatRate: 4 },
  { name: "Calabacín", category: "Verduras", unit: "kg", vatRate: 4 },
  { name: "Ajo", category: "Verduras", unit: "ud", vatRate: 4 },
  { name: "Fresas", category: "Frutas", unit: "kg", vatRate: 4 },
  { name: "Aguacate", category: "Frutas", unit: "ud", vatRate: 4 },

  // Carnes y proteínas
  { name: "Pollo", category: "Carnes", unit: "kg", vatRate: 10 },
  { name: "Ternera", category: "Carnes", unit: "kg", vatRate: 10 },
  { name: "Tofu", category: "Proteínas", unit: "ud", vatRate: 10 },
  { name: "Salmón", category: "Pescado", unit: "kg", vatRate: 10 },
  { name: "Huevos", category: "Proteínas", unit: "docena", vatRate: 4 },
  { name: "Chuletas de cerdo", category: "Carnes", unit: "kg", vatRate: 10 },
  { name: "Pechuga de pavo", category: "Carnes", unit: "kg", vatRate: 10 },
  { name: "Albóndigas", category: "Carnes", unit: "kg", vatRate: 10 },
  { name: "Bacalao", category: "Pescado", unit: "kg", vatRate: 10 },

  // Lácteos y alternativas
  { name: "Leche", category: "Lácteos", unit: "l", vatRate: 4 },
  { name: "Yogur natural", category: "Lácteos", unit: "pack", vatRate: 4 },
  { name: "Queso de cabra", category: "Lácteos", unit: "kg", vatRate: 10 },
  { name: "Mantequilla", category: "Lácteos", unit: "ud", vatRate: 10 },
  { name: "Bebida de almendra", category: "Bebidas vegetales", unit: "l", vatRate: 10 },
  { name: "Requesón", category: "Lácteos", unit: "ud", vatRate: 10 },
  { name: "Nata para cocinar", category: "Lácteos", unit: "l", vatRate: 10 },

  // Despensa
  { name: "Pan integral", category: "Panadería", unit: "ud", vatRate: 4 },
  { name: "Arroz", category: "Básicos", unit: "kg", vatRate: 4 },
  { name: "Pasta", category: "Básicos", unit: "kg", vatRate: 4 },
  { name: "Lentejas", category: "Legumbres", unit: "kg", vatRate: 4 },
  { name: "Harina de trigo", category: "Básicos", unit: "kg", vatRate: 4 },
  { name: "Aceite de oliva", category: "Básicos", unit: "l", vatRate: 10 },
  { name: "Azúcar moreno", category: "Básicos", unit: "kg", vatRate: 10 },
  { name: "Sal marina", category: "Básicos", unit: "kg", vatRate: 10 },
  { name: "Miel", category: "Básicos", unit: "kg", vatRate: 10 },
  { name: "Mermelada", category: "Básicos", unit: "ud", vatRate: 10 },
  { name: "Vinagre", category: "Básicos", unit: "l", vatRate: 10 },

  // Bebidas
  { name: "Bebida de avena", category: "Bebidas", unit: "l", vatRate: 10 },
  { name: "Zumo de naranja", category: "Bebidas", unit: "l", vatRate: 10 },
  { name: "Agua mineral", category: "Bebidas", unit: "pack", vatRate: 10 },
  { name: "Café", category: "Bebidas", unit: "kg", vatRate: 10 },
  { name: "Té verde", category: "Bebidas", unit: "ud", vatRate: 10 },
  { name: "Refresco", category: "Bebidas", unit: "l", vatRate: 10 },
  { name: "Vino tinto", category: "Bebidas", unit: "ud", vatRate: 10 },
  { name: "Cerveza artesanal", category: "Bebidas", unit: "pack", vatRate: 10 },

  // Snacks y repostería
  { name: "Chocolate negro", category: "Snacks", unit: "ud", vatRate: 10 },
  { name: "Galletas", category: "Snacks", unit: "pack", vatRate: 10 },
  { name: "Frutos secos", category: "Snacks", unit: "kg", vatRate: 10 },
  { name: "Barritas de cereales", category: "Snacks", unit: "pack", vatRate: 10 },
  { name: "Magdalenas", category: "Repostería", unit: "pack", vatRate: 10 },
  { name: "Helado", category: "Repostería", unit: "l", vatRate: 10 },
  { name: "Cacao en polvo", category: "Repostería", unit: "kg", vatRate: 10 },

  // Higiene y limpieza
  { name: "Papel higiénico", category: "Higiene", unit: "pack", vatRate: 21 },
  { name: "Detergente", category: "Limpieza", unit: "l", vatRate: 21 },
  { name: "Jabón de manos", category: "Higiene", unit: "ud", vatRate: 21 },
  { name: "Champú", category: "Higiene", unit: "ud", vatRate: 21 },
  { name: "Pasta de dientes", category: "Higiene", unit: "ud", vatRate: 21 },
  { name: "Esponjas", category: "Limpieza", unit: "pack", vatRate: 21 },
  { name: "Limpiador multiusos", category: "Limpieza", unit: "l", vatRate: 21 },
];

const generateProducts = (): Product[] => {
  const numProducts = Math.floor(Math.random() * 6 + 30); // 30-35 products
  const products: Product[] = [];
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  
  // Ensure at least one product from each category
  categories.forEach(category => {
    const categoryProducts = PRODUCTS.filter(p => p.category === category);
    const randomProduct = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
    products.push({
      ...randomProduct,
      price: Number((Math.random() * 10 + 0.5).toFixed(2)),
      quantity: Number((Math.random() * 3 + 0.1).toFixed(2)),
      discount: Math.random() < 0.3 ? Math.floor(Math.random() * 21 + 5) : 0,
      isEco: Math.random() < 0.5,
    });
  });

  // Fill remaining products randomly
  while (products.length < numProducts) {
    const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    // Avoid excessive repetition
    if (products.filter(p => p.name === randomProduct.name).length < 2) {
      products.push({
        ...randomProduct,
        price: Number((Math.random() * 10 + 0.5).toFixed(2)),
        quantity: Number((Math.random() * 3 + 0.1).toFixed(2)),
        discount: Math.random() < 0.3 ? Math.floor(Math.random() * 21 + 5) : 0,
        isEco: Math.random() < 0.5,
      });
    }
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
