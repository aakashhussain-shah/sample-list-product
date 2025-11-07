import type { Product } from "@/types/product.ts";

export function filterProducts(products: Product[], maxPrice: number): Product[] {
  return products.filter((product) => product.price <= maxPrice)
}