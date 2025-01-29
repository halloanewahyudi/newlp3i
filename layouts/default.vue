<template>
  <div>
    <div :style="{ width: progress + '%'}" class="fixed z-[1000] top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-secondary  to-tertiary border-b border-b-tertiary/20">

    </div>
    <Navbar />
    <slot />
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
  const {menus} = useMenus()
  const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 2000,
    throttle: 200,
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
  })
</script>

<style>

</style>