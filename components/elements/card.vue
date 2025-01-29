<template>
  <div class="rounded-xl overflow-hidden h-full relative group bg-white border hover:shadow-lg duration-300 ">
     <div class="w-full h-[300px] overflow-hidden">
      <img :src="cardImage" alt="" class="w-full h-full object-cover group-hover:scale-105 duration-300">
     </div>
     <div class="p-6 lg:p-8">
      <h3 class="text-xl font-semibold mb-2">{{ props?.cardTitle }}</h3>
      <p class="text-gray-600 mb-4">{{ props?.cardDescription }}</p>
      <slot />
     </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['cardImage', 'cardTitle', 'cardDescription'])
</script>

<style>

</style>