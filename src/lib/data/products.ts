export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export const products: Product[] = [
  {
    slug: 'landing1',
    name: 'Landing Page Template 1',
    description: 'A beautiful landing page template.',
    price: 10,
  },
  {
    slug: 'landing2',
    name: 'Landing Page Template 2',
    description: 'Another amazing template.',
    price: 15,
  },
];