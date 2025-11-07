<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { downloadProductList } from './download-product-list.ts'
import { Product } from './types.ts'

const data = ref<Product[]>([])

onMounted(async () => {
	data.value = await downloadProductList()
})
</script>

<template>
  <pre class="gray">{{ data }}</pre>
</template>

<style scoped>
.gray {
  color: gray;
}
</style>
