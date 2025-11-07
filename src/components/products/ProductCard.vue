<script setup lang="ts">
import type { Product } from '@/types/product.ts'

defineProps<{
  product: Product
  categoryColor: string
}>()
</script>

<template>
  <div class="p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
    <div
        :class="['border-2 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full', categoryColor]"
    >
      <!-- Product Image -->
      <div class="aspect-square bg-gray-200 overflow-hidden">
        <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      <!-- Product Info -->
      <div class="p-4">
        <div class="flex gap-1">
          <!-- ID -->
          <p class="text-xs text-gray-500 mb-2">#{{ product.id }}</p>

          <!-- Title -->
          <h3 class="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
            {{ product.title }}
          </h3>
        </div>

        <!-- Category -->
        <p class="text-xs text-gray-600 capitalize mb-3">
          {{ product.category }}
        </p>

        <!-- Rating and Price Row -->
        <div class="flex items-center justify-between">
          <!-- Rating -->
          <div class="flex items-center gap-1">
            <span class="text-yellow-400">★</span>
            <span class="text-sm font-medium text-gray-700">{{ product.rating.toFixed(1) }}</span>
          </div>

          <!-- Price -->
          <p class="text-lg font-bold text-gray-900">${{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>