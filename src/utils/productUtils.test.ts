import { describe, it, expect } from 'vitest'
import {deleteProduct, filterProducts, sortByPrice} from "@/utils/productUtils.ts";
import { mockProducts } from "@tests/mocks/products.mock.ts"

describe('filterProducts', () => {
  it('returns only products below 100', () => {
    const result = filterProducts(mockProducts, 100)
    expect(result).toHaveLength(2)
  })
})

describe('deleteProduct', () => {
  it('removes product by id', () => {
    const result = deleteProduct(mockProducts, 2)
    expect(result).toHaveLength(2)
    expect(result.find((p) => p.id === 2)).toBeUndefined()
  })
})

describe('sortByPrice', () => {
  it('sorts product by price in ascending order', () => {
    const result = sortByPrice(mockProducts, 'asc')
    expect(result[0].price).toBe(50)
    expect(result[1].price).toBe(100)
    expect(result[2].price).toBe(150)
  })

  it('sorts products by price in descending order', () => {
    const result = sortByPrice(mockProducts, 'desc')
    expect(result[0].price).toBe(150)
    expect(result[1].price).toBe(100)
    expect(result[2].price).toBe(50)
  })
})
