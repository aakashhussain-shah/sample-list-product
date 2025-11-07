import type { Product } from './types'

export function filterProducts(products: Product[], maxPrice: number): Product[] {
	return products.filter((product) => product.price <= maxPrice)
}