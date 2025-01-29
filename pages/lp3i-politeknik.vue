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
  const { data, status } = useAsyncData('politeknik', () => $fetch('/api/lp3i-politeknik'))
</script>

<style>

</style>