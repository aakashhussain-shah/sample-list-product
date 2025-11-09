import { ref, computed, onMounted } from 'vue'
import type { Product } from '@/types/product'
import {API_BASE_URL, MAX_PRICE, PRODUCTS_LIMIT} from "@/constants.ts";
import {deleteProduct, filterProducts, sortByPrice} from "@/utils/productUtils.ts";

export function useProducts() {
  const data = ref<Product[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const sortOrder = ref<'asc' | 'desc'>('asc')

  const downloadProductList = async (): Promise<Product[]> => {
    try {
      const result = await fetch(`${API_BASE_URL}?limit=${PRODUCTS_LIMIT}`)
      const jsonData = await result.json()
      return jsonData.products
    } catch (err) {
      console.error(err)
      throw new Error('Failed to load products')
    }
  }

  const filteredProducts = computed(() => {
    const filtered = filterProducts(data.value, MAX_PRICE)
    return sortByPrice(filtered, sortOrder.value)
  })

  const handleDeleteProduct = (productId: number) => {
    data.value = deleteProduct(data.value, productId)
  }

  const toggleSort = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }

  const loadProducts = async () => {
    isLoading.value = true
    try {
      data.value = await downloadProductList()
      error.value = null
    } catch (err) {
      error.value = 'Failed to load products. Please try again later.'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    await loadProducts()
  })

  return {
    data,
    isLoading,
    error,
    sortOrder,
    filteredProducts,
    toggleSort,
    handleDeleteProduct,
  }
}