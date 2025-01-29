<template>
  <div>
    <div class="container">
      <h2 class="text-3xl lg:text-4xl font-semibold mb-20 text-secondary" v-html="props?.home_section_6?.judul_section"></h2>
      <div v-html="props?.home_section_6?.content_section" class="logo-partner"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 type Props = {
   home_section_6:{
    judul_section:string,
    content_section:string,
   }
 }
 const props = defineProps<Props>()

 // membuat style 
 onMounted(async () => {
   const gallery = document.querySelector('.gallery')
   gallery.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-5','xl:grid-cols-6', 'gap-5','lg:gap-10', 'items-center', 'justify-center')
 
   const galleryItem = document.querySelectorAll('.gallery-item')
   galleryItem.forEach(item => {
     item.classList.add('w-40', 'h-auto', 'object-cover','mx-auto','text-center')
   })

   
 })


</script>

<style scoped>
  .logo-partner .gallery{
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5
  }
:deep(.gallery-item img) {
   @apply mx-auto h-12 w-auto object-contain;
}
</style>