import { describe, it, expect } from 'vitest'
import {filterProducts} from "@/utils/productFilters.ts";
import { mockProducts } from "@mocks/products.mock.ts"

describe('filterProducts', () => {
  it('returns only products below 100', () => {
    const result = filterProducts(mockProducts, 100)
    expect(result).toHaveLength(2)
  })
})
