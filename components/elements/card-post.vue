<template>
  <div class="group">
    <div class="w-full h-[240px] rounded-xl overflow-hidden mb-5">
      <img sizes="sm" format="webp" :src="props.cpImage" alt="" class="w-full h-[240px] object-cover group-hover:scale-110 duration-300" />
    </div>
     
     <span class="text-sm text-gray-600 mb-2"><BootstrapIcon name="calendar-check" /> {{ props.cpDate }}</span>
     <NuxtLink :to="props.cpLink">
      <h4 class="text-xl text-secondary font-semibold mb-2">{{ props.cpTitle }}</h4>
     </NuxtLink>
     <p class="text-gray-600 mb-4">{{ props.cpDescription }}</p>
  </div>
</template>

<script lang="ts" setup>

 const props = defineProps(['cpImage', 'cpDate', 'cpTitle', 'cpDescription', 'cpLink'])
</script>

<style>

</style>