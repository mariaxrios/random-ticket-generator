
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
  postalCode: string;
  storeNumber: string;
}

export interface DisplayOptions {
  useUppercase: boolean;
  showLoyaltyPoints: boolean;
  showPromotions: boolean;
  showEcoMessages: boolean;
}

export interface Ticket {
  store: Store;
  products: Product[];
  timestamp: Date;
  paymentMethod: "cash" | "card" | "contactless" | "bizum";
  ticketNumber: string;
  cashierNumber: number;
  employeeId: string;
  employeeName: string;
  barcode: string;
  displayOptions: DisplayOptions;
}
