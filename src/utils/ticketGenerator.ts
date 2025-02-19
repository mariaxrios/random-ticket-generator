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

const PRODUCTS: Array<Omit<Product, "quantity" | "discount" | "isEco">> = [
  // Frutas y verduras (precios por kg/unidad)
  { name: "Plátanos", category: "Frutas", unit: "kg", vatRate: 4, price: 2.29 },
  { name: "Manzanas", category: "Frutas", unit: "kg", vatRate: 4, price: 2.49 },
  { name: "Zanahorias", category: "Verduras", unit: "kg", vatRate: 4, price: 1.89 },
  { name: "Espinacas", category: "Verduras", unit: "kg", vatRate: 4, price: 2.99 },
  { name: "Tomates", category: "Verduras", unit: "kg", vatRate: 4, price: 2.79 },
  { name: "Patatas", category: "Verduras", unit: "kg", vatRate: 4, price: 1.49 },
  { name: "Cebollas", category: "Verduras", unit: "kg", vatRate: 4, price: 1.69 },
  { name: "Pimientos", category: "Verduras", unit: "kg", vatRate: 4, price: 3.29 },
  { name: "Naranjas", category: "Frutas", unit: "kg", vatRate: 4, price: 1.99 },
  { name: "Uvas", category: "Frutas", unit: "kg", vatRate: 4, price: 3.99 },
  { name: "Lechuga", category: "Verduras", unit: "ud", vatRate: 4, price: 1.29 },
  { name: "Calabacín", category: "Verduras", unit: "kg", vatRate: 4, price: 2.19 },
  { name: "Ajo", category: "Verduras", unit: "ud", vatRate: 4, price: 0.99 },
  { name: "Fresas", category: "Frutas", unit: "kg", vatRate: 4, price: 4.99 },
  { name: "Aguacate", category: "Frutas", unit: "ud", vatRate: 4, price: 1.79 },

  // Carnes y proteínas
  { name: "Pollo", category: "Carnes", unit: "kg", vatRate: 10, price: 6.99 },
  { name: "Ternera", category: "Carnes", unit: "kg", vatRate: 10, price: 14.99 },
  { name: "Tofu", category: "Proteínas", unit: "ud", vatRate: 10, price: 2.49 },
  { name: "Salmón", category: "Pescado", unit: "kg", vatRate: 10, price: 19.99 },
  { name: "Huevos", category: "Proteínas", unit: "docena", vatRate: 4, price: 3.29 },
  { name: "Chuletas de cerdo", category: "Carnes", unit: "kg", vatRate: 10, price: 8.99 },
  { name: "Pechuga de pavo", category: "Carnes", unit: "kg", vatRate: 10, price: 12.99 },
  { name: "Albóndigas", category: "Carnes", unit: "kg", vatRate: 10, price: 9.99 },
  { name: "Bacalao", category: "Pescado", unit: "kg", vatRate: 10, price: 16.99 },

  // Lácteos y alternativas
  { name: "Leche", category: "Lácteos", unit: "l", vatRate: 4, price: 1.19 },
  { name: "Yogur natural", category: "Lácteos", unit: "pack", vatRate: 4, price: 2.49 },
  { name: "Queso de cabra", category: "Lácteos", unit: "kg", vatRate: 10, price: 15.99 },
  { name: "Mantequilla", category: "Lácteos", unit: "ud", vatRate: 10, price: 3.49 },
  { name: "Bebida de almendra", category: "Bebidas vegetales", unit: "l", vatRate: 10, price: 2.29 },
  { name: "Requesón", category: "Lácteos", unit: "ud", vatRate: 10, price: 2.19 },
  { name: "Nata para cocinar", category: "Lácteos", unit: "l", vatRate: 10, price: 2.79 },

  // Despensa
  { name: "Pan integral", category: "Panadería", unit: "ud", vatRate: 4, price: 1.99 },
  { name: "Arroz", category: "Básicos", unit: "kg", vatRate: 4, price: 2.29 },
  { name: "Pasta", category: "Básicos", unit: "kg", vatRate: 4, price: 1.79 },
  { name: "Lentejas", category: "Legumbres", unit: "kg", vatRate: 4, price: 2.49 },
  { name: "Harina de trigo", category: "Básicos", unit: "kg", vatRate: 4, price: 1.29 },
  { name: "Aceite de oliva", category: "Básicos", unit: "l", vatRate: 10, price: 7.99 },
  { name: "Azúcar moreno", category: "Básicos", unit: "kg", vatRate: 10, price: 2.19 },
  { name: "Sal marina", category: "Básicos", unit: "kg", vatRate: 10, price: 1.49 },
  { name: "Miel", category: "Básicos", unit: "kg", vatRate: 10, price: 6.99 },
  { name: "Mermelada", category: "Básicos", unit: "ud", vatRate: 10, price: 3.29 },
  { name: "Vinagre", category: "Básicos", unit: "l", vatRate: 10, price: 1.99 },

  // Bebidas
  { name: "Bebida de avena", category: "Bebidas", unit: "l", vatRate: 10, price: 2.49 },
  { name: "Zumo de naranja", category: "Bebidas", unit: "l", vatRate: 10, price: 2.99 },
  { name: "Agua mineral", category: "Bebidas", unit: "pack", vatRate: 10, price: 3.99 },
  { name: "Café", category: "Bebidas", unit: "kg", vatRate: 10, price: 12.99 },
  { name: "Té verde", category: "Bebidas", unit: "ud", vatRate: 10, price: 2.99 },
  { name: "Refresco", category: "Bebidas", unit: "l", vatRate: 10, price: 1.79 },
  { name: "Vino tinto", category: "Bebidas", unit: "ud", vatRate: 10, price: 7.99 },
  { name: "Cerveza artesanal", category: "Bebidas", unit: "pack", vatRate: 10, price: 5.99 },

  // Snacks y repostería
  { name: "Chocolate negro", category: "Snacks", unit: "ud", vatRate: 10, price: 2.49 },
  { name: "Galletas", category: "Snacks", unit: "pack", vatRate: 10, price: 1.99 },
  { name: "Frutos secos", category: "Snacks", unit: "kg", vatRate: 10, price: 12.99 },
  { name: "Barritas de cereales", category: "Snacks", unit: "pack", vatRate: 10, price: 3.49 },
  { name: "Magdalenas", category: "Repostería", unit: "pack", vatRate: 10, price: 2.79 },
  { name: "Helado", category: "Repostería", unit: "l", vatRate: 10, price: 4.99 },
  { name: "Cacao en polvo", category: "Repostería", unit: "kg", vatRate: 10, price: 3.99 },

  // Higiene y limpieza
  { name: "Papel higiénico", category: "Higiene", unit: "pack", vatRate: 21, price: 4.99 },
  { name: "Detergente", category: "Limpieza", unit: "l", vatRate: 21, price: 5.99 },
  { name: "Jabón de manos", category: "Higiene", unit: "ud", vatRate: 21, price: 1.99 },
  { name: "Champú", category: "Higiene", unit: "ud", vatRate: 21, price: 3.99 },
  { name: "Pasta de dientes", category: "Higiene", unit: "ud", vatRate: 21, price: 2.99 },
  { name: "Esponjas", category: "Limpieza", unit: "pack", vatRate: 21, price: 1.99 },
  { name: "Limpiador multiusos", category: "Limpieza", unit: "l", vatRate: 21, price: 2.99 },
];

const getRandomQuantity = (unit: string): number => {
  switch (unit) {
    case "kg":
      return Number((Math.random() * 2 + 0.2).toFixed(2)); // Entre 0.2 y 2.2 kg
    case "l":
      return Number((Math.random() * 3 + 1).toFixed(2)); // Entre 1 y 4 litros
    case "ud":
      return Math.floor(Math.random() * 3) + 1; // Entre 1 y 3 unidades
    case "pack":
      return Math.floor(Math.random() * 2) + 1; // Entre 1 y 2 packs
    case "docena":
      return 1; // Siempre 1 docena
    default:
      return 1;
  }
};

const getEcoLabel = (): string => {
  const labels = ["ECO", "BIO", "Ecológico", "Natural"];
  return labels[Math.floor(Math.random() * labels.length)];
};

const generateProducts = (): Product[] => {
  const numProducts = Math.floor(Math.random() * 6 + 30); // 30-35 productos
  const products: Product[] = [];
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  const usedProducts = new Set<string>(); // Para evitar repeticiones
  
  // Asegurarse de incluir productos de todas las categorías
  categories.forEach(category => {
    const categoryProducts = PRODUCTS.filter(p => p.category === category);
    const numFromCategory = Math.floor(Math.random() * 3) + 1; // 1-3 productos por categoría
    
    const availableProducts = categoryProducts.filter(p => !usedProducts.has(p.name));
    const selectedProducts = availableProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, numFromCategory);
    
    selectedProducts.forEach(product => {
      const quantity = getRandomQuantity(product.unit);
      const isEco = Math.random() < 0.5; // 50% probabilidad de ser eco
      usedProducts.add(product.name); // Marcar el producto como usado
      
      products.push({
        ...product,
        quantity,
        discount: Math.random() < 0.2 ? Math.floor(Math.random() * 16 + 5) : 0, // 20% probabilidad de descuento (5-20%)
        isEco,
      });
    });
  });

  // Añadir productos adicionales hasta alcanzar el mínimo
  while (products.length < numProducts) {
    const availableProducts = PRODUCTS.filter(p => !usedProducts.has(p.name));
    if (availableProducts.length === 0) break; // Si no hay más productos disponibles

    const randomProduct = availableProducts[Math.floor(Math.random() * availableProducts.length)];
    const quantity = getRandomQuantity(randomProduct.unit);
    usedProducts.add(randomProduct.name);
    
    products.push({
      ...randomProduct,
      quantity,
      discount: Math.random() < 0.2 ? Math.floor(Math.random() * 16 + 5) : 0,
      isEco: Math.random() < 0.5,
    });
  }

  return products.sort((a, b) => a.category.localeCompare(b.category));
};

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}${year}`;
};

const generateBarcode = (timestamp: Date): string => {
  // 4 dígitos para el identificador del supermercado (4000-4999)
  const storeId = (4000 + Math.floor(Math.random() * 1000)).toString();
  
  // 8 dígitos para el número de ticket
  const ticketNum = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
  
  // 6 dígitos para la fecha (DDMMYY)
  const date = formatDate(timestamp);
  
  // 4 dígitos para el checksum
  const checksum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  // Formato: SSSS TTTTTTTT DDMMYY CCCC
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
    cashierNumber: Math.floor(Math.random() * 20) + 1,
    employeeId: `E${Math.floor(Math.random() * 9000 + 1000)}`,
    employeeName: "Juan García",
    barcode: generateBarcode(timestamp),
  };
};
