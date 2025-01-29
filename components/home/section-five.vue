<template>
  <div class="bg-gradient from-primary via-primary-800 to-primary text-slate-50 py-10 lg:py-0 lg:pt-20 ">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div class="lg:mb-10 py-10">
          <div class="text-3xl lg:text-4xl font-semibold mb-5 " v-html="props?.home_section_5?.home_s5_judul_section"></div>
        <Lokasi2 />
        </div>
      <div class="py-10 lg:py-0">
        <img v-gsap.whenVisible.delay-500.from="{ y: 100, opacity: 0, duration: 1 }" :src="props?.home_section_5?.home_s5_image" alt="" srcset="" class="w-400 h-auto object-cover lg:-mb-10 rounded-xl">
      </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
 type Props = {
  home_section_5:{
    home_s5_judul_section:string,
    home_s5_image:string
  }
 }

const props = defineProps<Props>()

</script>
