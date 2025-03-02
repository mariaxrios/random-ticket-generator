
export const getEcoLabel = (): string => {
  const labels = ["ECO", "BIO", "Ecológico", "Natural", "Orgánico"];
  return labels[Math.floor(Math.random() * labels.length)];
};

export const getRandomFont = (): string => {
  const fonts = [
    "font-mono",
    "font-roboto-mono",
    "font-space-mono",
    "font-source-code-pro",
    "font-ubuntu-mono",
    "font-fira-mono"
  ];
  return fonts[Math.floor(Math.random() * fonts.length)];
};

export const getEcoMessage = (): string => {
  const messages = [
    "Juntos cuidamos el planeta",
    "Por un futuro más verde",
    "Comprometidos con el medio ambiente",
    "Reducir, Reutilizar, Reciclar",
    "Tu elección sostenible",
    "Cuidando nuestro entorno",
    "Eco-responsables contigo"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export const getBarcodePosition = (): number => {
  return Math.floor(Math.random() * 4); // 0-3 posiciones posibles
};

export const getPromoMessage = (): string => {
  const messages = [
    "¡2x1 en productos de limpieza!",
    "Descuento del 20% en la próxima compra",
    "3x2 en productos frescos",
    "¡Regalo sorpresa en tu próxima visita!",
    "¡50% en la segunda unidad!",
    "Ofertas especiales para clientes fidelizados"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export const generateAuthCodes = () => {
  return {
    nc: Math.floor(Math.random() * 1000000000).toString().padStart(9, '0'),
    aut: Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    aid: `A${Math.floor(Math.random() * 10000000000000).toString().padStart(13, '0')}`,
    arc: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
  };
};

export const getRandomDesign = () => {
  return {
    headerBg: ["bg-purple-50", "bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50"][Math.floor(Math.random() * 5)],
    borderStyle: ["border-dashed", "border-dotted", "border-solid"][Math.floor(Math.random() * 3)],
    spacing: ["space-y-2", "space-y-3", "space-y-4"][Math.floor(Math.random() * 3)],
    infoColor: ["text-blue-600", "text-purple-600", "text-emerald-600", "text-indigo-600"][Math.floor(Math.random() * 4)],
    ecoColor: ["text-green-600", "text-emerald-600", "text-teal-600", "text-lime-600"][Math.floor(Math.random() * 4)],
    savingsColor: ["text-orange-600", "text-amber-600", "text-red-600", "text-rose-600"][Math.floor(Math.random() * 4)],
    layout: Math.floor(Math.random() * 4), // 0-3 layouts diferentes
    promoStyle: ["bg-yellow-50", "bg-orange-50", "bg-red-50", "bg-pink-50"][Math.floor(Math.random() * 4)],
    footerBg: ["bg-gray-50", "bg-slate-50", "bg-zinc-50"][Math.floor(Math.random() * 3)],
  };
};

export const getCardType = (): string => {
  const types = ["Visa", "Mastercard", "American Express", "Maestro"];
  return types[Math.floor(Math.random() * types.length)];
};
