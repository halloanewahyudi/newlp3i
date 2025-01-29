<template>
  <div>
    <HomeHome/>
    <div v-if="status === 'pending'">
      <Loading /> 
    </div>
  
    <div v-else>
      <h1>{{ college}}</h1>
    </div>
  </div>
 </template>
 <script setup lang="ts">
 // useAsyncData di sini
 const apiurl = useRuntimeConfig().public.apiurl
 const { status, data: college } = await useAsyncData('college', () => $fetch(`${apiurl}/wp/v2/pages?slug=home&_fields=acf,meta,content`))
 

 </script>