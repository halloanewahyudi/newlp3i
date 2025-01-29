<template>
  <div class=" min-h-screen flex flex-col justify-center items-center relative">
    <img :src="props?.home_section_3?.background?.url" alt="" class="w-full h-full min-h-screen object-cover absolute top-0 left-0">
       <div class="container relative">
            <div v-html="props?.home_section_3?.home_s3_judul_section" class="text-3xl lg:text-4xl font-semibold mb-2 text-white text-center"></div>
         <div class="max-w-[800px] mx-auto mt-10">
         <ul class="flex flex-wrap justify-center items-center gap-5 lg:gap-12">
          <li v-for="item in props?.home_section_3?.list" class="bg-white py-2 px-7 rounded-full shrink-0 hover:shadow-xl duration-200">
            <NuxtLink :to="item?.link" class="flex items-center justify-between gap-2">
              <img :src="item?.icon?.url" alt="">
              <span class="text-2xl font-semibold text-secondary">{{ item?.text }}</span>
            </NuxtLink>
          </li>
         </ul>
         </div>
          </div>
  </div>
</template>

<script lang="ts" setup>
 type Props = {
  home_section_3:{
    home_s3_judul_section:string,
    list:string[],
    background:string,
  }
 }
 const props = defineProps<Props>()


</script>


<style lang="postcss" scoped>
:deep(.btn) {
  @apply text-[16px] !py-0;
}
</style>