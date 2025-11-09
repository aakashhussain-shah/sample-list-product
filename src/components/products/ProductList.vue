<script setup lang="ts">
import { useProducts } from '@/composables/useProducts'
import ProductToolbar from './ProductToolbar.vue'
import ProductCard from './ProductCard.vue'
import { getCategoryColor } from '@/utils/categoryColors'
import {MAX_PRICE} from "@/constants.ts";

const { filteredProducts, isLoading, error, sortOrder, toggleSort, handleDeleteProduct } = useProducts()
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
            :key="product.id"
            :product="product"
            :category-color="getCategoryColor(product.category)"
            @delete="handleDeleteProduct"
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