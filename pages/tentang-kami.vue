<template>
  <div>
    <div v-if="status === 'pending'"> 
      <Loading /> 
    </div>
     <div v-else-if="status === 'error'"> {{ error }}</div>
   <div v-else>
     <pre> {{ data }}</pre>
   </div>
  </div>
</template>

<script lang="ts" setup>
// const apiurl = useRuntimeConfig().public.apiurl
const { data, status } = useAsyncData('campus', () => $fetch('/api/hubungi-kami'))
</script>

<style>

</style>