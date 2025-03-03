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

const getEcoLabel = (): string => {
  const labels = ["ECO", "BIO"];
  return labels[Math.floor(Math.random() * labels.length)];
};

export const generateProducts = (
  totalItems: number = 30, 
  producePercentage: number = 50,
  ecoPercentage: number = 50,
  tomatoPercentage: number = 0
): Product[] => {
  const numProducts = Math.min(totalItems, PRODUCTS.length);
  const products: Product[] = [];
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  const usedProducts = new Set<string>();

  const numEcoProducts = Math.round((numProducts * ecoPercentage) / 100);
  const numProduceProducts = Math.round((numProducts * producePercentage) / 100);
  const numTomatoProducts = Math.round((numProduceProducts * tomatoPercentage) / 100);
  
  let ecoCount = 0;
  let tomatoCount = 0;
  
  if (numTomatoProducts > 0) {
    const tomatoProducts = PRODUCTS.filter(p => p.name.toLowerCase().includes("tomate"));
    
    if (tomatoProducts.length > 0) {
      const selectedTomatoes = [];
      
      if (numTomatoProducts >= tomatoProducts.length) {
        selectedTomatoes.push(...tomatoProducts);
        
        const additionalTomatoes = numTomatoProducts - tomatoProducts.length;
        for (let i = 0; i < additionalTomatoes; i++) {
          const randomTomato = tomatoProducts[Math.floor(Math.random() * tomatoProducts.length)];
          selectedTomatoes.push(randomTomato);
        }
      } else {
        const shuffledTomatoes = [...tomatoProducts].sort(() => Math.random() - 0.5);
        selectedTomatoes.push(...shuffledTomatoes.slice(0, numTomatoProducts));
      }
      
      selectedTomatoes.forEach(product => {
        const quantity = getRandomQuantity(product.unit);
        const shouldBeEco = ecoCount < numEcoProducts;
        if (shouldBeEco) ecoCount++;
        
        usedProducts.add(product.name);
        tomatoCount++;
        
        products.push({
          ...product,
          quantity,
          discount: 0,
          isEco: shouldBeEco,
        });
      });
    }
  }
  
  const remainingProduceProducts = numProduceProducts - tomatoCount;
  
  if (remainingProduceProducts > 0) {
    const fruitsAndVeggies = PRODUCTS.filter(
      p => (p.category === "Frutas" || p.category === "Verduras") && 
           !p.name.toLowerCase().includes("tomate") && 
           !usedProducts.has(p.name)
    );
    
    const selectedFruitsAndVeggies = fruitsAndVeggies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(remainingProduceProducts, fruitsAndVeggies.length));
    
    selectedFruitsAndVeggies.forEach(product => {
      const quantity = getRandomQuantity(product.unit);
      const shouldBeEco = ecoCount < numEcoProducts;
      if (shouldBeEco) ecoCount++;
      
      usedProducts.add(product.name);
      
      products.push({
        ...product,
        quantity,
        discount: 0,
        isEco: shouldBeEco,
      });
    });
  }
  
  const remainingEcoProducts = numEcoProducts - ecoCount;
  const remainingProducts = numProducts - products.length;
  let nonProduceEcoCount = 0;
  
  categories.forEach(category => {
    if (products.length >= numProducts) return;
    if (category === "Frutas" || category === "Verduras") return;
    
    const categoryProducts = PRODUCTS.filter(p => p.category === category);
    const availableSlots = Math.min(
      Math.floor(remainingProducts / (categories.length - categories.indexOf(category))),
      categoryProducts.length
    );
    
    const availableProducts = categoryProducts.filter(p => !usedProducts.has(p.name));
    const selectedProducts = availableProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, availableSlots);
    
    selectedProducts.forEach(product => {
      const quantity = getRandomQuantity(product.unit);
      const shouldBeEco = nonProduceEcoCount < remainingEcoProducts;
      
      if (shouldBeEco) nonProduceEcoCount++;
      usedProducts.add(product.name);
      
      products.push({
        ...product,
        quantity,
        discount: 0,
        isEco: shouldBeEco,
      });
    });
  });

  while (products.length < numProducts) {
    const availableProducts = PRODUCTS.filter(p => !usedProducts.has(p.name));
    if (availableProducts.length === 0) break;

    const randomProduct = availableProducts[Math.floor(Math.random() * availableProducts.length)];
    const quantity = getRandomQuantity(randomProduct.unit);
    const shouldBeEco = nonProduceEcoCount < remainingEcoProducts;
    
    if (shouldBeEco) nonProduceEcoCount++;
    usedProducts.add(randomProduct.name);
    
    products.push({
      ...randomProduct,
      quantity,
      discount: 0,
      isEco: shouldBeEco,
    });
  }

  return products;
};
