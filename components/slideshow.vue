<template>
  <div>
    <div v-if="status === 'pending'"> 
      <Loading/>
    </div>
     <div v-else-if="status === 'error'"> {{ error }}</div>
   <div v-else>
    <Splider :options="{
        type: 'loop',
        autoplay: true,
        drag: true,
        perPage: 1,
        arrow:true
      }">
        <SplideSlide v-for="slide in data" :key="slide.id" class="bg-black text-slate-50 relative min-h-screen flex flex-col justify-center">
          <NuxtImg sizes="100vw" format="webp" quality="80" :src="slide._embedded['wp:featuredmedia'][0].source_url" alt="" srcset="" class="absolute top-0 left-0 w-full min-h-screen object-cover" />
        <div class="container relative">
          <div class="max-w-[800px]">
            <h2 v-if="slide?.acf?.include_title" class="text-3xl lg:text-6xl font-semibold" v-html="slide.title?.rendered"></h2>
            <div v-if="slide?.acf?.add_description" class="mt-6 text-lg" v-html="slide?.acf?.description"></div>
          </div>
        </div>
        </SplideSlide>
      </Splider>
   </div>
  </div>
</template>
<script lang="ts" setup>
  const { data, status } = useAsyncData('slidshow', () => $fetch('/api/slideshow'))

 
</script>

<style scoped>
:deep(.btn) {
  @apply py-2.5 px-6 rounded-full bg-primary text-slate-100 hover:bg-opacity-80 hover:shadow-md duration-300 mt-10 inline-block;
}
</style>