<script setup lang="ts">
defineProps<{
  sortOrder: 'asc' | 'desc'
}>()

defineEmits<{
  toggleSort: []
}>()
</script>

<template>
  <div class="flex items-center gap-4">
    <button
        @click="$emit('toggleSort')"
        class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 cursor-pointer"
    >
      <span>Sort by Price</span>
      <span class="text-lg">{{ sortOrder === 'asc' ? '&#8593;' : '&#8595;' }}</span>
    </button>
  </div>
</template>