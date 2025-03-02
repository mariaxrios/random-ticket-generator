
import { Product } from "../types/ticket";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

export const calculateTotal = (products: Product[]) => {
  return products.reduce((total, product) => {
    const price = product.price * product.quantity;
    const discount = price * (product.discount || 0) / 100;
    return total + (price - discount);
  }, 0);
};

export const calculateVAT = (products: Product[], vatRate: number) => {
  return products
    .filter(p => p.vatRate === vatRate)
    .reduce((total, product) => {
      const price = product.price * product.quantity;
      const discount = price * (product.discount || 0) / 100;
      const netPrice = price - discount;
      return total + (netPrice * vatRate) / (100 + vatRate);
    }, 0);
};

export const calculateBagsSaved = (products: Product[]): number => {
  return Math.floor(products.length / 3); // Estimación aproximada
};

export const calculateCarbonFootprint = (products: Product[]): number => {
  return Number((products.length * 0.12).toFixed(2)); // kg CO2 estimados
};

export const calculateLoyaltyPoints = (total: number): number => {
  return Math.floor(total * 10); // 10 puntos por euro
};

export const formatText = (text: string, useUppercase: boolean) => {
  return useUppercase ? text.toUpperCase() : text;
};

export const calculateTotalDiscount = (products: Product[]): number => {
  return products.reduce((acc, product) => {
    const price = product.price * product.quantity;
    const discount = price * (product.discount || 0) / 100;
    return acc + discount;
  }, 0);
};
