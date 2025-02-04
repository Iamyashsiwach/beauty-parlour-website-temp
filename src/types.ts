export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
  service: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Stylist {
  id: string;
  name: string;
  image: string;
  role: string;
  specialties: string[];
}