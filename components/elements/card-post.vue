<template>
  <div>
     <img :src="cpImage" alt="">
     <span class="text-sm text-gray-600 mb-2">{{ cpDate }}</span>
     <h4 class="text-xl font-semibold mb-2">{{ cpTitle }}</h4>
     <p class="text-gray-600 mb-4">{{ cpDescription }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['cpImage', 'cpDate', 'cpTitle', 'cpDescription'])
</script>

<style>

</style>