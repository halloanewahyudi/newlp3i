<template>
  <div class=" ">
    <div class="container text-center">
      <div class="text-3xl lg:text-4xl font-semibold mb-2 text-secondary" v-html="props?.home_section_4?.home_s4_judul_section"></div>
      <div class="" v-html="props?.home_section_4?.home_s4_content_section"></div>
  
    </div>
  </div>
</template>

<script lang="ts" setup>
  type Props = {
    home_section_4:{
      home_s4_judul_section:string,
      home_s4_content_section:string
    }
  }
  const props = defineProps<Props>()


</script>

<style lang="postcss" scoped>
:deep(.btn) {
  @apply text-[16px] bg-primary py-2.5 px-6 rounded-full text-slate-100 hover:bg-opacity-80 hover:shadow-md duration-300;
}
</style>

