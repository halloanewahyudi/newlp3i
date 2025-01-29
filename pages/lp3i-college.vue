<template>
 <div>
   <div v-if="status === 'pending'"> 
    <Loading /> 
   </div>
   <div v-else-if="status === 'error'"> {{ error }}</div>
   <div v-else>
    <pre>{{ college }}</pre>
   </div>
 </div>
</template>
<script setup lang="ts">
// useAsyncData di sini
const apiurl = useRuntimeConfig().public.apiurl
const { data: college, status } = useAsyncData('college', () => $fetch('/api/college'))

</script>