
import { Product } from "../../types/ticket";
import { PRODUCTS } from "../constants/products";

const getRandomQuantity = (unit: string): number => {
  switch (unit) {
    case "kg":
      return Number((Math.random() * 2 + 0.2).toFixed(2));
    case "l":
      return Number((Math.random() * 3 + 1).toFixed(2));
    case "ud":
      return Math.floor(Math.random() * 3) + 1;
    case "pack":
      return Math.floor(Math.random() * 2) + 1;
    case "docena":
      return 1;
    default:
      return 1;
  }
};

export const generateProducts = (totalItems: number = 30, ecoPercentage: number = 50): Product[] => {
  const numProducts = Math.min(totalItems, PRODUCTS.length);
  const products: Product[] = [];
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  const usedProducts = new Set<string>();

  const numEcoProducts = Math.round((numProducts * ecoPercentage) / 100);
  let ecoCount = 0;
  
  // Primero, aseguramos el porcentaje de frutas y verduras
  const fruitsAndVeggies = PRODUCTS.filter(p => p.category === "Frutas" || p.category === "Verduras");
  const numFruitsAndVeggies = Math.round((numProducts * ecoPercentage) / 100);
  
  // Seleccionar frutas y verduras aleatorias
  const selectedFruitsAndVeggies = fruitsAndVeggies
    .sort(() => Math.random() - 0.5)
    .slice(0, numFruitsAndVeggies);
  
  // Añadir frutas y verduras seleccionadas
  selectedFruitsAndVeggies.forEach(product => {
    const quantity = getRandomQuantity(product.unit);
    const shouldBeEco = ecoCount < numEcoProducts;
    if (shouldBeEco) ecoCount++;
    
    usedProducts.add(product.name);
    products.push({
      ...product,
      quantity,
      discount: Math.random() < 0.2 ? Math.floor(Math.random() * 16 + 5) : 0,
      isEco: shouldBeEco,
    });
  });
  
  // Luego, llenar el resto de productos
  categories.forEach(category => {
    if (products.length >= numProducts) return;
    if (category === "Frutas" || category === "Verduras") return; // Ya procesados
    
    const categoryProducts = PRODUCTS.filter(p => p.category === category);
    const remainingProducts = numProducts - products.length;
    const numFromCategory = Math.min(
      Math.floor(remainingProducts / (categories.length - categories.indexOf(category))),
      categoryProducts.length
    );
    
    const availableProducts = categoryProducts.filter(p => !usedProducts.has(p.name));
    const selectedProducts = availableProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, numFromCategory);
    
    selectedProducts.forEach(product => {
      const quantity = getRandomQuantity(product.unit);
      const canBeEco = ecoCount < numEcoProducts;
      const shouldBeEco = canBeEco && (ecoCount < numEcoProducts - (numProducts - products.length - 1));
      
      if (shouldBeEco) ecoCount++;
      usedProducts.add(product.name);
      
      products.push({
        ...product,
        quantity,
        discount: Math.random() < 0.2 ? Math.floor(Math.random() * 16 + 5) : 0,
        isEco: shouldBeEco,
      });
    });
  });

  // Llenar los productos restantes si es necesario
  while (products.length < numProducts) {
    const availableProducts = PRODUCTS.filter(p => !usedProducts.has(p.name));
    if (availableProducts.length === 0) break;

    const randomProduct = availableProducts[Math.floor(Math.random() * availableProducts.length)];
    const quantity = getRandomQuantity(randomProduct.unit);
    const canBeEco = ecoCount < numEcoProducts;
    const shouldBeEco = canBeEco && (ecoCount < numEcoProducts - (numProducts - products.length - 1));
    
    if (shouldBeEco) ecoCount++;
    usedProducts.add(randomProduct.name);
    
    products.push({
      ...randomProduct,
      quantity,
      discount: Math.random() < 0.2 ? Math.floor(Math.random() * 16 + 5) : 0,
      isEco: shouldBeEco,
    });
  }

  return products.sort((a, b) => a.category.localeCompare(b.category));
};
