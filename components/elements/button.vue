<template>
  <div>
    <NuxtLink :class="{ 'bg-secondary': props?.secondary ,'bg-primary': !secondary,}" class="py-2.5 px-6 rounded-full bg-primary text-slate-100 hover:bg-opacity-80 hover:shadow-md duration-300" :to="props?.btnLink" >{{ props?.btnText }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  btnText: String,
  btnLink: String,
  secondary: {
    type: Boolean,
    default: false
  }
})
</script>

<style>

</style>