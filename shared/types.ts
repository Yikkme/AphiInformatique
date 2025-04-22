export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface ServiceCard {
  title: string;
  icon: string;
  features: string[];
}

export interface BusinessHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: string;
}
