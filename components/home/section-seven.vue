<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        <div v-for="item in data" :key="item.id" class="group">
          <div class="rounded-xl overflow-hidden w-full h-[280px]">
            <NuxtImg sizes="100vw" format="webp" quality="80" :src="item._embedded['wp:featuredmedia'][0].source_url"
              alt="" srcset="" class="w-full h-[280px] object-cover group-hover:scale-110 duration-200 mb-5" />
          </div>
          <NuxtLink :to="item.slug" class=""> <h4 class="text-lg  font-semibold mb-2" v-html="item.title.rendered"></h4></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const apiurl = useRuntimeConfig().public.apiurl
const { status, data, error } =  useAsyncData('home', () => $fetch('/api/home-post'));
</script>

<style></style>