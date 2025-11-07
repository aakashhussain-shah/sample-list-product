<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { downloadProductList } from '@/services/ProductService.ts'
import { filterProducts } from '@/composables/useProducts.ts'
import type { Product } from '@/types/product.ts'
import ProductToolbar from "./ProductToolbar.vue";
import ProductCard from "@/components/products/ProductCard.vue";

const data = ref<Product[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')

const MAX_PRICE = 100

const filteredProducts = computed(() => {
  const filtered = filterProducts(data.value, MAX_PRICE)
  return [...filtered].sort((a, b) => {
    return sortOrder.value === 'asc' ? a.price - b.price : b.price - a.price
  })
})

const toggleSort = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

const categoryColorMap: Record<string, string> = {
  'beauty': 'bg-pink-50 border-pink-200',
  'fragrances': 'bg-blue-50 border-blue-200',
  'groceries': 'bg-green-50 border-green-200',
  'home-decoration': 'bg-yellow-50 border-yellow-200',
  'kitchen-accessories': 'bg-violet-50 border-violet-200',
  'mens-shirts': 'bg-sky-50 border-sky-200',
  'mens-shoes': 'bg-slate-50 border-slate-200',
  'mens-watches': 'bg-gray-50 border-gray-200',
  'mobile-accessories': 'bg-indigo-50 border-indigo-200',
}

const getCategoryColor = (category: string): string => {
  return categoryColorMap[category.toLowerCase()] || 'bg-gray-50 border-gray-200'
}

onMounted(async () => {
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
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Products</h1>
        <p class="text-gray-600">Showing {{filteredProducts.length}} products with price ≤ ${{ MAX_PRICE }}</p>
      </div>

      <!-- Toolbar -->
      <div v-if="!isLoading && !error" class="mb-6">
        <ProductToolbar :sortOrder="sortOrder" @toggleSort="toggleSort" />
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">Loading products...</p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p class="text-red-800">{{ error }}</p>
      </div>

      <!-- No Products Found -->
      <div v-else-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-gray-600 text-lg">No products found matching your criteria.</p>
      </div>

      <!-- Products List -->
      <div v-else class="flex flex-wrap -m-3">
        <ProductCard
            v-for="product in filteredProducts"
            :product="product"
            :category-color="getCategoryColor(product.category)"
        />
      </div>

      <!-- Results Summary -->
      <div v-if="!isLoading && !error && filteredProducts.length > 0" class="mt-8 text-center">
        <p class="text-gray-600">
          Showing <span class="font-semibold">{{ filteredProducts.length }}</span> products
        </p>
      </div>
    </div>
  </div>
</template>