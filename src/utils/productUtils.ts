import {Product} from "@/types/product.ts";

export const filterProducts = (products: Product[], maxPrice: number): Product[] => {
  return products.filter((product) => product.price <= maxPrice)
}

export const sortByPrice = (products: Product[], order: 'asc' | 'desc'): Product[] => {
  return [...products].sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price))
}

export const deleteProduct = (products: Product[], productId: number): Product[] => {
  return products.filter((product) => product.id !== productId)
}