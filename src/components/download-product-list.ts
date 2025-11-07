import type { Product } from './types.ts'

export const downloadProductList = async (): Promise<Product[]> => {
	try {
		const result = await (await fetch('https://dummyjson.com/products?limit=100')).json()
		return result.products
	} catch (error) {
		console.error(error)
	}
	return []
}
