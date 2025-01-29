<template>
  <div>
     <div v-if="status === 'pending'"> <Loading /> </div>
     <div v-else-if="status === 'error'"> {{ error }}</div>
   <div v-else>
     <pre> {{ data }}</pre>
   </div>
  </div>
</template>

<script lang="ts" setup>
 const route = useRoute()
const apiurl = useRuntimeConfig().public.apiurl
  const { data, error, status } = useAsyncData('posts', () => $fetch(`${apiurl}/wp/v2/posts`,{
    params: {
      _fields: 'title,meta,content',
      _link: true,
      _embed: true,
      slug: route.params.slug
    }
  }))
 
</script>

<style>

</style>