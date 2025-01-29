<template>
  <div>
    <div v-if="status === 'pending'">
      <Loading />
    </div>
    <div v-else-if="status === 'error'"> {{ error }}</div>
    <div v-else>
     <ul>
      <li v-for="item in data" :key="item">
        {{ item.title.rendered }}
      </li>
     </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { data, status } = await useAsyncData('program', async () => {
  try {
    const response = await $fetch('/api/posts?per_page=1');
    console.log('API Response (Server):', response); // Debug SSR
    return response;
  } catch (err) {
    console.error('API Error:', err); // Debug error API
    return null;
  }
}, { server: true });



const meta = computed(() => data.value?.[0]?.meta ?? {});
useSeoMeta({
  title: computed(() => meta.value._seopress_titles_title ?? meta.value._seopress_titles_title),
  description: computed(() => meta.value._seopress_titles_desc ?? 'Default Description'),
  ogTitle: computed(() => meta.value._seopress_titles_title ?? 'LP3I'),
  ogDescription: computed(() => meta.value._seopress_titles_desc ?? 'LP3I')
})
</script>

<style>

</style>