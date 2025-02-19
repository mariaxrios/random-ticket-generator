import { Product } from "../../types/ticket";

export const PRODUCTS: Array<Omit<Product, "quantity" | "discount" | "isEco">> = [
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
