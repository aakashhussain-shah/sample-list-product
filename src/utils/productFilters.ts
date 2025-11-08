import {Product} from "@/types/product.ts";

export const filterProducts = (products: Product[], maxPrice: number): Product[] => {
  return products.filter((product) => product.price <= maxPrice)
}