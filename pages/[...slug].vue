<template>
  <div>
     <div v-if="status === 'pending'"> <Loading /> </div>
     <div v-else-if="status === 'error'"> {{ error }}</div>
   <div v-else>
    <div class="bg-gradient-to-tr from-primary via-primary-800 to-primary-950 text-primary-50 py-20 mb-10 min-h-[480px]">
      <div class="max-w-screen-md mx-auto px-6 -mb-20 -bottom-20 relative">
        <span class="mb-3 flex gap-2 items-center">
          <BootstrapIcon name="calendar-check" />
          <span class="text-sm"> {{ postDate(data[0].date) }}</span>
        </span>
        <h2 class="text-3xl lg:text-5xl font-semibold leading-relaxed mb-10" v-html="data[0].title.rendered"></h2>
        <NuxtImg sizes="100vw" format="webp"  :src="data[0]._embedded['wp:featuredmedia'][0].source_url" alt="" srcset="" class="w-full h-auto object-cover rounded-xl" />
      </div>
    </div>
    <div class="py-20 single-content">
      <div class="max-w-screen-md mx-auto px-6">
        <div v-html="data[0].content.rendered"></div>
      </div>
    </div>
     <pre> {{ data }}</pre>
   </div>
  </div>
</template>

<script lang="ts" setup>
 const route = useRoute()
 const { postDate } = useDateFormat()
const apiurl = useRuntimeConfig().public.apiurl
  const { data, error, status } = useAsyncData('posts', () => $fetch(`${apiurl}/wp/v2/posts?_fields=date,title,meta,content,_links&_embed`,{
    params: {
      slug: route.params.slug
    }
  }))
 
  const meta = computed(() => data.value?.[0]?.meta ?? {});
useSeoMeta({
  title: computed(() => meta.value._seopress_titles_title ?? meta.value._seopress_titles_title),
  description: computed(() => meta.value._seopress_titles_desc ?? 'Default Description'),
  ogTitle: computed(() => meta.value._seopress_titles_title ?? 'LP3I'),
  ogDescription: computed(() => meta.value._seopress_titles_desc ?? 'LP3I')
})

</script>

<style scoped>
 :deep(.single-content img){
  @apply w-full h-auto object-cover ;
 }
</style>