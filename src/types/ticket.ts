
export interface Product {
  name: string;
  price: number;
  quantity: number;
  isEco: boolean;
  category: string;
  unit: string;
  discount?: number;
  vatRate: 4 | 10 | 21;
}

export interface Store {
  name: string;
  address: string;
  nif: string;
  website: string;
  phone: string;
}

export interface Ticket {
  store: Store;
  products: Product[];
  timestamp: Date;
  paymentMethod: "cash" | "card" | "contactless" | "bizum";
  ticketNumber: string;
  barcode: string;
}
